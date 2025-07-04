
-- Criar tabela de entidades
CREATE TABLE public.entities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  category TEXT NOT NULL,
  logo_url TEXT,
  instagram TEXT,
  linkedin TEXT,
  email TEXT,
  website TEXT,
  whatsapp TEXT,
  president TEXT,
  founded INTEGER,
  members INTEGER DEFAULT 0,
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela de eventos
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  entity_id UUID REFERENCES public.entities(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela de categorias
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Inserir categorias padrão
INSERT INTO public.categories (name) VALUES 
  ('Acadêmica'),
  ('Empreendedorismo'),
  ('Cultura'),
  ('Esportes'),
  ('Responsabilidade Social'),
  ('Tecnologia'),
  ('Finanças'),
  ('Consultoria'),
  ('Pesquisa'),
  ('Networking');

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.entities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Políticas para leitura pública
CREATE POLICY "Anyone can view entities" ON public.entities FOR SELECT USING (true);
CREATE POLICY "Anyone can view events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Anyone can view categories" ON public.categories FOR SELECT USING (true);

-- Políticas para modificação (por enquanto permitindo tudo para desenvolvimento)
CREATE POLICY "Anyone can insert entities" ON public.entities FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update entities" ON public.entities FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete entities" ON public.entities FOR DELETE USING (true);
CREATE POLICY "Anyone can insert events" ON public.events FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update events" ON public.events FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete events" ON public.events FOR DELETE USING (true);

-- Inserir dados de exemplo
INSERT INTO public.entities (name, description, long_description, category, instagram, linkedin, email, president, founded, members, tags, featured) VALUES
  ('Insper Jr.', 'Empresa júnior de consultoria em gestão e estratégia', 'A Insper Jr. é a empresa júnior oficial do Insper, focada em consultoria empresarial. Desenvolvemos projetos de gestão, estratégia e análise de mercado para empresas de diversos setores, proporcionando experiência prática aos alunos.', 'Consultoria', '@insperjr', 'insper-jr', 'contato@insperjr.com.br', 'Maria Silva', 2010, 45, ARRAY['consultoria', 'estratégia', 'gestão', 'projetos'], true),
  ('Insper Ventures', 'Incubadora de startups e projetos empreendedores', 'O Insper Ventures é o hub de empreendedorismo do Insper, focado em fomentar o ecossistema de startups e inovação. Oferecemos mentorias, workshops e suporte para transformar ideias em negócios de sucesso.', 'Empreendedorismo', '@insperventures', 'insper-ventures', 'ventures@insper.edu.br', 'João Santos', 2015, 32, ARRAY['startups', 'inovação', 'mentoria', 'pitch'], true),
  ('Liga de Mercado Financeiro', 'Estudo e análise dos mercados financeiros', 'A Liga de Mercado Financeiro promove o conhecimento sobre investimentos, análise de mercado e economia. Realizamos simulações de trading, estudos de caso e palestras com profissionais do mercado.', 'Finanças', '@lmfinsper', 'liga-mercado-financeiro-insper', 'lmf@insper.edu.br', 'Ana Costa', 2012, 28, ARRAY['investimentos', 'trading', 'análise', 'economia'], false),
  ('Enactus Insper', 'Projetos de impacto social através do empreendedorismo', 'A Enactus Insper desenvolve projetos de empreendedorismo social, criando soluções inovadoras para problemas sociais e ambientais. Nosso foco é gerar impacto positivo na comunidade através de negócios sustentáveis.', 'Responsabilidade Social', '@enactusinsper', 'enactus-insper', 'enactus@insper.edu.br', 'Carlos Oliveira', 2014, 38, ARRAY['impacto social', 'sustentabilidade', 'comunidade', 'inovação'], true);

-- Inserir eventos de exemplo
INSERT INTO public.events (entity_id, title, description, date, location) VALUES
  ((SELECT id FROM public.entities WHERE name = 'Insper Jr.' LIMIT 1), 'Workshop de Consultoria', 'Aprenda as principais metodologias de consultoria', '2024-08-15 19:00:00+00', 'Auditório Principal'),
  ((SELECT id FROM public.entities WHERE name = 'Insper Ventures' LIMIT 1), 'Pitch Day', 'Apresentação de startups desenvolvidas pelos alunos', '2024-08-20 18:00:00+00', 'Espaço Inovação'),
  ((SELECT id FROM public.entities WHERE name = 'Liga de Mercado Financeiro' LIMIT 1), 'Simulação de Trading', 'Competição de trading com prêmios', '2024-08-25 20:00:00+00', 'Lab de Finanças'),
  ((SELECT id FROM public.entities WHERE name = 'Enactus Insper' LIMIT 1), 'Feira de Impacto Social', 'Apresentação dos projetos sociais desenvolvidos', '2024-09-05 17:00:00+00', 'Pátio Central');
