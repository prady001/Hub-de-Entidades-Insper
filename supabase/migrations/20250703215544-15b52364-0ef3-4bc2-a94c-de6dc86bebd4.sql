
-- Adicionar campo para armazenar o ícone selecionado na tabela entities
ALTER TABLE public.entities 
ADD COLUMN icon_name TEXT;

-- Criar comentário para documentar o campo
COMMENT ON COLUMN public.entities.icon_name IS 'Nome do ícone selecionado para representar a entidade';
