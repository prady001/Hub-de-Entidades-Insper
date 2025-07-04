
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Entity {
  id: string;
  name: string;
  description: string;
  long_description?: string;
  category: string;
  logo_url?: string;
  icon_url?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  website?: string;
  whatsapp?: string;
  president?: string;
  founded?: number;
  members?: number;
  tags?: string[];
  featured?: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateEntityData {
  name: string;
  description: string;
  long_description?: string;
  category: string;
  logo_url?: string;
  icon_url?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  website?: string;
  whatsapp?: string;
  president?: string;
  founded?: number;
  members?: number;
  tags?: string[];
  featured?: boolean;
}

export const useEntities = () => {
  return useQuery({
    queryKey: ["entities"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("entities")
        .select("*")
        .order("name");
      
      if (error) throw error;
      return data as Entity[];
    },
  });
};

export const useEntity = (id: string) => {
  return useQuery({
    queryKey: ["entity", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("entities")
        .select(`
          *,
          events (
            id,
            title,
            description,
            date,
            location
          )
        `)
        .eq("id", id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });
};

export const useCreateEntity = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateEntityData) => {
      const { data: result, error } = await supabase
        .from("entities")
        .insert([data])
        .select()
        .single();
      
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entities"] });
      toast({
        title: "Sucesso!",
        description: "Entidade criada com sucesso.",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao criar entidade. Tente novamente.",
        variant: "destructive",
      });
      console.error("Error creating entity:", error);
    },
  });
};

export const useUpdateEntity = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<CreateEntityData> }) => {
      const { data: result, error } = await supabase
        .from("entities")
        .update({ ...data, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single();
      
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entities"] });
      queryClient.invalidateQueries({ queryKey: ["entity"] });
      toast({
        title: "Sucesso!",
        description: "Entidade atualizada com sucesso.",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao atualizar entidade. Tente novamente.",
        variant: "destructive",
      });
      console.error("Error updating entity:", error);
    },
  });
};

export const useDeleteEntity = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("entities")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entities"] });
      toast({
        title: "Sucesso!",
        description: "Entidade removida com sucesso.",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao remover entidade. Tente novamente.",
        variant: "destructive",
      });
      console.error("Error deleting entity:", error);
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("name")
        .order("name");
      
      if (error) throw error;
      return data.map(cat => cat.name);
    },
  });
};
