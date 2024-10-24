import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { X } from "lucide-react";
import React, { Component, ReactNode } from "react";

export class AlertModal extends Component<any, any> {
  render() {
    const { isOpen, isClosed } = this.props;
    return (
      <>
        <Modal isOpen={isOpen} onClose={isClosed}>
          <ModalContent>
            {(onClose) => (
              <div>
                <ModalHeader>
                  <div className="w-full flex justify-between items-center">
                    <h1>Você Tem certeza?</h1>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <p>Essa é uma ação permanente e não podera ser revertida</p>
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
