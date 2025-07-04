
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Globe, Lightbulb, Award, TrendingUp } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-insper-blue to-insper-green text-white">
              Sobre o Projeto
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conectando o <span className="text-gradient">Ecossistema</span> Insper
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O Hub de Entidades Insper é uma plataforma digital que centraliza, organiza e 
              disponibiliza informações sobre todas as entidades estudantis do Insper, 
              promovendo maior visibilidade e engajamento.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa <span className="text-gradient">Missão</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Criar um ecossistema digital que facilite o acesso dos alunos a todas as 
                organizações estudantis, proporcionando um ambiente único onde os estudantes 
                possam descobrir, conectar-se e interagir com as entidades que mais se 
                alinham aos seus interesses acadêmicos e pessoais.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Atualmente, o Insper conta com cerca de 45 entidades estudantis que 
                desempenham papéis fundamentais no desenvolvimento acadêmico, social e 
                profissional dos alunos.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-insper-blue to-insper-green rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Centralização</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Todas as informações das entidades reunidas em um único local 
                    acessível e organizado.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-insper-green to-insper-blue rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Engajamento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Aumentar a participação estudantil através de maior visibilidade 
                    das oportunidades.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O <span className="text-gradient">Problema</span> e Nossa <span className="text-gradient">Solução</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">Situação Atual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Informações dispersas e fragmentadas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Dificuldade de descoberta de entidades</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Baixo engajamento estudantil</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Falta de padronização na comunicação</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">Nossa Solução</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Plataforma centralizada e organizada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Sistema de busca e filtros inteligentes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Interface intuitiva e responsiva</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Informações padronizadas e atualizadas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MVP Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cronograma do <span className="text-gradient">MVP</span>
            </h2>
            <p className="text-xl text-gray-600">
              Desenvolvimento em 4 semanas focado no ecossistema básico
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Semana 1</Badge>
                  <div className="w-8 h-8 bg-gradient-to-r from-insper-blue to-insper-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                </div>
                <CardTitle className="text-lg">Planejamento</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Modelagem do banco de dados</li>
                  <li>• Definição do escopo</li>
                  <li>• Desenho das telas básicas</li>
                  <li>• Configuração do ambiente</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Semana 2</Badge>
                  <div className="w-8 h-8 bg-gradient-to-r from-insper-green to-insper-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                </div>
                <CardTitle className="text-lg">Desenvolvimento</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Backend e API</li>
                  <li>• Frontend básico</li>
                  <li>• Sistema de filtros</li>
                  <li>• Testes de integração</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Semana 3</Badge>
                  <div className="w-8 h-8 bg-gradient-to-r from-insper-blue to-insper-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                </div>
                <CardTitle className="text-lg">Refinamento</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ajustes de usabilidade</li>
                  <li>• Responsividade</li>
                  <li>• Melhorias na busca</li>
                  <li>• Validação de dados</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Semana 4</Badge>
                  <div className="w-8 h-8 bg-gradient-to-r from-insper-green to-insper-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                </div>
                <CardTitle className="text-lg">Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deploy em produção</li>
                  <li>• Testes com usuários</li>
                  <li>• Coleta de feedback</li>
                  <li>• Documentação técnica</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades <span className="text-gradient">Futuras</span>
            </h2>
            <p className="text-xl text-gray-600">
              Recursos que serão implementados nas próximas fases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-blue to-insper-green rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Sistema de Recomendação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recomendações personalizadas baseadas no perfil e histórico do aluno.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-green to-insper-blue rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Assistente Virtual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Chatbot inteligente para suporte e orientação aos estudantes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-blue to-insper-green rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Cronograma Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ferramentas para criação de cronogramas de estudos personalizados.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-green to-insper-blue rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Gamificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistema de pontuação e conquistas para incentivar a participação.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-blue to-insper-green rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Painel Analítico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dashboard com métricas e insights sobre engajamento estudantil.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-green to-insper-blue rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conexão entre estudantes com interesses similares e networking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
