
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  onClearFilters: () => void;
  categories: string[];
}

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  selectedCategories,
  onCategoryToggle,
  onClearFilters,
  categories,
}: SearchAndFilterProps) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-insper-gray w-5 h-5" />
        <Input
          type="text"
          placeholder="Buscar entidades, categorias, tags..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 h-14 text-base border-gray-200 focus:border-primary focus:ring-primary/20 smooth-focus rounded-xl shadow-sm"
          aria-label="Campo de busca"
        />
      </div>

      {/* Filter Button */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 rounded-lg border-gray-200 hover:border-primary hover:bg-insper-red-light smooth-focus"
          aria-expanded={showFilters}
          aria-controls="filter-panel"
        >
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filtros</span>
          {selectedCategories.length > 0 && (
            <Badge variant="secondary" className="ml-2 bg-primary text-white">
              {selectedCategories.length}
            </Badge>
          )}
        </Button>

        {selectedCategories.length > 0 && (
          <Button
            variant="ghost"
            onClick={onClearFilters}
            className="text-insper-gray hover:text-primary smooth-focus"
          >
            <X className="w-4 h-4 mr-1" />
            Limpar filtros
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <Badge
              key={category}
              className="cursor-pointer bg-primary text-white hover:bg-primary/90 transition-colors smooth-focus px-3 py-1"
              onClick={() => onCategoryToggle(category)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onCategoryToggle(category);
                }
              }}
            >
              {category}
              <X className="w-3 h-3 ml-2" />
            </Badge>
          ))}
        </div>
      )}

      {/* Category Filters */}
      {showFilters && (
        <div 
          id="filter-panel"
          className="p-6 bg-insper-gray-light rounded-xl border border-gray-100 animate-slide-up shadow-sm"
        >
          <h3 className="font-semibold text-insper-gray-dark mb-4 text-lg">Categorias</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategories.includes(category) ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 smooth-focus px-4 py-2 text-sm font-medium ${
                  selectedCategories.includes(category)
                    ? "bg-primary text-white hover:bg-primary/90 shadow-sm"
                    : "border-gray-200 text-insper-gray-dark hover:border-primary hover:bg-insper-red-light"
                }`}
                onClick={() => onCategoryToggle(category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onCategoryToggle(category);
                  }
                }}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
