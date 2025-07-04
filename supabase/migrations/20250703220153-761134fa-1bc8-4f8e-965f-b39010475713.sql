
-- Criar bucket para armazenar ícones das entidades
INSERT INTO storage.buckets (id, name, public)
VALUES ('entity-icons', 'entity-icons', true);

-- Criar política para permitir que qualquer pessoa visualize os ícones
CREATE POLICY "Anyone can view entity icons"
ON storage.objects FOR SELECT
USING (bucket_id = 'entity-icons');

-- Criar política para permitir upload de ícones
CREATE POLICY "Anyone can upload entity icons"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'entity-icons');

-- Criar política para permitir atualização de ícones
CREATE POLICY "Anyone can update entity icons"
ON storage.objects FOR UPDATE
USING (bucket_id = 'entity-icons');

-- Criar política para permitir remoção de ícones
CREATE POLICY "Anyone can delete entity icons"
ON storage.objects FOR DELETE
USING (bucket_id = 'entity-icons');

-- Atualizar a coluna icon_name para icon_url para armazenar a URL do arquivo
ALTER TABLE public.entities 
DROP COLUMN IF EXISTS icon_name;

ALTER TABLE public.entities 
ADD COLUMN icon_url TEXT;

-- Criar comentário para documentar o campo
COMMENT ON COLUMN public.entities.icon_url IS 'URL do ícone personalizado da entidade armazenado no Supabase Storage';
