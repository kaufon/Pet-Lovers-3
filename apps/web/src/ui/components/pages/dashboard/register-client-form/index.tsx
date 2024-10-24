import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { interpolate } from "framer-motion";
import { X } from "lucide-react";
import React, { Component, ReactNode } from "react";

interface RegisterClientFormProps {
  isOpen: boolean;
  isClosed: () => void;
  isRegister?: boolean;
}
export class RegisterClientForm extends Component<RegisterClientFormProps> {
  static defaultProps = {
    isRegister: true,
  };
  render() {
    const { isOpen, isClosed, isRegister } = this.props;
    const headerText = isRegister ? "Registar Cliente" : "Atualizar Cliente";
    return (
      <>
        <Modal isOpen={isOpen} onClose={isClosed}>
          <ModalContent>
            {(onClose) => (
              <div>
                <ModalHeader>
                  <div className="w-full flex justify-between items-center">
                    <h1>{headerText}</h1>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <Input label="Nome" />
                  <Input label="Nome Social" />
                  <Input label="CPF" />
                  <Input label="Telefone" />
                  <Input label="RG" />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    className="text-red-600 bg-opacity-20"
                    onPress={onClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    color="success"
                    className="text-green-600 bg-opacity-20"
                    onPress={onClose}
                  >
                    Confirmar
                  </Button>
                </ModalFooter>
              </div>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
}
