
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X, Image } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface IconUploaderProps {
  currentIconUrl?: string;
  onIconUpload: (iconUrl: string | undefined) => void;
}

const IconUploader = ({ currentIconUrl, onIconUpload }: IconUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(currentIconUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Erro",
        description: "Por favor, selecione apenas arquivos de imagem.",
        variant: "destructive",
      });
      return;
    }

    // Validar tamanho (máximo 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "Erro",
        description: "O arquivo deve ter no máximo 2MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Gerar nome único para o arquivo
      const timestamp = Date.now();
      const extension = file.name.split('.').pop();
      const fileName = `entity-icon-${timestamp}.${extension}`;

      // Upload para o Supabase Storage
      const { data, error } = await supabase.storage
        .from('entity-icons')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Upload error:', error);
        toast({
          title: "Erro",
          description: "Erro ao fazer upload do ícone. Tente novamente.",
          variant: "destructive",
        });
        return;
      }

      // Obter URL pública do arquivo
      const { data: urlData } = supabase.storage
        .from('entity-icons')
        .getPublicUrl(fileName);

      const publicUrl = urlData.publicUrl;
      setPreviewUrl(publicUrl);
      onIconUpload(publicUrl);

      toast({
        title: "Sucesso!",
        description: "Ícone carregado com sucesso.",
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Erro",
        description: "Erro inesperado ao fazer upload.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveIcon = async () => {
    if (currentIconUrl) {
      // Extrair nome do arquivo da URL para deletar do storage
      const fileName = currentIconUrl.split('/').pop();
      if (fileName) {
        try {
          await supabase.storage
            .from('entity-icons')
            .remove([fileName]);
        } catch (error) {
          console.error('Error removing file:', error);
        }
      }
    }
    
    setPreviewUrl(undefined);
    onIconUpload(undefined);
    
    // Limpar input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Ícone da Entidade</CardTitle>
        <p className="text-sm text-gray-600">
          Faça upload de um ícone personalizado para representar sua entidade
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Preview do ícone atual */}
        {previewUrl && (
          <div className="flex items-center justify-center p-4 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
            <div className="text-center">
              <img
                src={previewUrl}
                alt="Ícone da entidade"
                className="w-16 h-16 mx-auto object-contain rounded-lg mb-2"
              />
              <p className="text-sm text-gray-600">Ícone atual</p>
            </div>
          </div>
        )}

        {/* Input de arquivo */}
        <div className="space-y-3">
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={isUploading}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
          />
          
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="flex-1"
            >
              <Upload className="w-4 h-4 mr-2" />
              {isUploading ? 'Carregando...' : 'Selecionar Ícone'}
            </Button>
            
            {previewUrl && (
              <Button
                type="button"
                variant="outline"
                onClick={handleRemoveIcon}
                disabled={isUploading}
              >
                <X className="w-4 h-4 mr-2" />
                Remover
              </Button>
            )}
          </div>
        </div>

        {/* Informações sobre requisitos */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Formatos aceitos: JPG, PNG, SVG, WebP</p>
          <p>• Tamanho máximo: 2MB</p>
          <p>• Recomendado: imagens quadradas (1:1)</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IconUploader;
