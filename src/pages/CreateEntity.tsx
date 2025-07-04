
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EntityForm from "@/components/EntityForm";
import { useCreateEntity, CreateEntityData } from "@/hooks/useEntities";

const CreateEntity = () => {
  const navigate = useNavigate();
  const createEntityMutation = useCreateEntity();

  const handleSubmit = (data: CreateEntityData) => {
    createEntityMutation.mutate(data, {
      onSuccess: () => {
        navigate("/entidades");
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nova Entidade</h1>
          <p className="text-gray-600">
            Cadastre uma nova entidade estudantil no Hub do Insper
          </p>
        </div>
        
        <EntityForm
          onSubmit={handleSubmit}
          isLoading={createEntityMutation.isPending}
          submitLabel="Criar Entidade"
        />
      </div>

      <Footer />
    </div>
  );
};

export default CreateEntity;
