
import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EntityCard from "@/components/EntityCard";
import SearchAndFilter from "@/components/SearchAndFilter";
import { Button } from "@/components/ui/button";
import { useEntities, useCategories } from "@/hooks/useEntities";
import { Building2, Plus, Settings } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Entidades = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const categoryParam = searchParams.get("category");
    return categoryParam ? [categoryParam] : [];
  });

  const { data: entities = [], isLoading, error } = useEntities();
  const { data: categories = [] } = useCategories();

  const filteredEntities = useMemo(() => {
    return entities.filter((entity) => {
      const matchesSearch = 
        entity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entity.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entity.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = 
        selectedCategories.length === 0 || 
        selectedCategories.includes(entity.category);

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories, entities]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      // Update URL params
      if (newCategories.length === 0) {
        searchParams.delete("category");
      } else if (newCategories.length === 1) {
        searchParams.set("category", newCategories[0]);
      }
      setSearchParams(searchParams);
      
      return newCategories;
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Erro ao carregar entidades</h1>
            <p className="text-xl text-gray-600 mb-8">
              Ocorreu um erro ao carregar as entidades. Tente novamente mais tarde.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-insper-blue to-insper-green rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Todas as <span className="text-gradient">Entidades</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Explore o ecossistema completo de entidades estudantis do Insper. 
              Encontre sua paixão, conecte-se e faça a diferença.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/admin/entities/new">
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Entidade
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  Painel Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
            onClearFilters={handleClearFilters}
            categories={categories}
          />
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isLoading ? (
                <Skeleton className="h-8 w-48" />
              ) : (
                `${filteredEntities.length} entidade${filteredEntities.length !== 1 ? 's' : ''} encontrada${filteredEntities.length !== 1 ? 's' : ''}`
              )}
            </h2>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredEntities.length === 0 ? (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Nenhuma entidade encontrada
              </h3>
              <p className="text-gray-600 mb-6">
                Tente ajustar seus filtros ou termo de busca
              </p>
              <button
                onClick={handleClearFilters}
                className="text-insper-blue hover:text-insper-blue-light font-medium"
              >
                Limpar todos os filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEntities.map((entity) => (
                <EntityCard key={entity.id} entity={entity} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Entidades;
