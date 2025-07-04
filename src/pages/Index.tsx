
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Users, Calendar, Sparkles, Target, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EntityCard from "@/components/EntityCard";
import { useEntities, useCategories } from "@/hooks/useEntities";

const Index = () => {
  const { data: entities, isLoading } = useEntities();
  const { data: categories } = useCategories();
  
  const featuredEntities = entities?.filter(entity => entity.featured) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-insper-blue to-insper-green text-white">
                <Sparkles className="w-4 h-4 mr-1" />
                Conectando Estudantes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hub de{" "}
                <span className="text-gradient">Entidades</span>
                <br />
                Insper
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Descubra, conecte-se e engaje-se com todas as entidades estudantis do Insper. 
                Sua jornada acadêmica e social começa aqui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/entidades">
                  <Button size="lg" className="bg-gradient-to-r from-insper-blue to-insper-green hover:opacity-90 text-white px-8 py-3">
                    Explorar Entidades
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/sobre">
                  <Button variant="outline" size="lg" className="px-8 py-3">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-insper-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-insper-green/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-insper-blue/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-insper-blue to-insper-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{entities?.length || 0}+</h3>
              <p className="text-gray-600">Entidades Cadastradas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-insper-green to-insper-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Estudantes Conectados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-insper-blue to-insper-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Eventos por Semestre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Entities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entidades em <span className="text-gradient">Destaque</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça algumas das entidades mais ativas e engajadas do Insper
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredEntities.map((entity) => (
                <EntityCard key={entity.id} entity={entity} featured />
              ))}
            </div>
          )}
          
          <div className="text-center">
            <Link to="/entidades">
              <Button variant="outline" size="lg" className="hover:bg-insper-blue hover:text-white">
                Ver Todas as Entidades
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore por <span className="text-gradient">Categoria</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre entidades que se alinham com seus interesses e objetivos
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories?.map((category) => (
              <Link key={category} to={`/entidades?category=${encodeURIComponent(category)}`}>
                <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-medium text-gray-900 mb-2">{category}</h3>
                    <p className="text-sm text-gray-500">
                      {entities?.filter(e => e.category === category).length || 0} entidades
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )) || (
              // Fallback categories while loading
              ['Acadêmica', 'Empreendedorismo', 'Cultura', 'Esportes', 'Responsabilidade Social'].map((category) => (
                <Link key={category} to={`/entidades?category=${encodeURIComponent(category)}`}>
                  <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-medium text-gray-900 mb-2">{category}</h3>
                      <p className="text-sm text-gray-500">
                        {Math.floor(Math.random() * 8) + 2} entidades
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que usar o <span className="text-gradient">Hub?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-blue to-insper-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Centralização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Todas as informações das entidades em um só lugar, 
                  facilitando sua busca e descoberta.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-green to-insper-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Conexão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conecte-se diretamente com as entidades através de 
                  múltiplos canais de comunicação.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-insper-blue to-insper-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Transparência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Informações atualizadas e transparentes sobre 
                  atividades, eventos e oportunidades.
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

export default Index;
