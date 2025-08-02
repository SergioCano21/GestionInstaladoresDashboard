import Button from '@/components/ui/button/Button';
import ButtonSection from '@/components/ui/button/ButtonSection';
import { ADD_FORM_EXIST, ADD_FORM_NEW } from '@/types/consts';

interface Props {
  closeModal: () => void;
  nextForm: (next: string) => void;
}

const StepAddInstaller = ({ closeModal, nextForm }: Props) => {
  return (
    <>
      <section className="pt-20 pb-25">
        <div className="mb-20 text-align-center">
          ¿El instalador es nuevo o ya existe en el sistema?
        </div>
        <div className="flex justify-content-center gap-20">
          <Button
            text="Agregar Nuevo"
            type="button"
            variant="primary"
            onClick={() => nextForm(ADD_FORM_NEW)}
          />
          <Button
            text="Registrar Existente"
            type="button"
            variant="close"
            onClick={() => nextForm(ADD_FORM_EXIST)}
          />
        </div>
      </section>

      <ButtonSection>
        <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
      </ButtonSection>
    </>
  );
};

export default StepAddInstaller;
