"use client";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { Pen, Trash } from "lucide-react";
import { Component } from "react";
import { RegisterPetForm } from "./register-pet-form";
import { AlertModal } from "../../commons/alert-modal";

export class PetsPage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isAlertModalOpen: false,
      isRegister: true, // Default to true for registering
    };
  }

  openModal = (isRegister = true) => {
    this.setState({ isModalOpen: true, isRegister });
  };

  openAlertModal = () => {
    this.setState({ isAlertModalOpen: true });
  };

  closeAlertModal = () => {
    this.setState({ isAlertModalOpen: false });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <Button color="default" onClick={() => this.openModal(true)}>
          Adicionar Pet
        </Button>
        <Table selectionMode="single" shadow="md">
          <TableHeader>
            <TableColumn>ID do Dono</TableColumn>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nome</TableColumn>
            <TableColumn>Raça</TableColumn>
            <TableColumn>Tipo</TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>ID do dono do Cão</TableCell>
              <TableCell>ID do Joaozinho</TableCell>
              <TableCell>Nome do Cão</TableCell>
              <TableCell>Raça do Cão</TableCell>
              <TableCell>Cachorro</TableCell>
              <TableCell>
                <div className="flex flex-row gap-3 text-zinc-400">
                  <Tooltip content="Editar">
                    <Pen onClick={() => this.openModal(false)} /> 
                  </Tooltip>
                  <Tooltip content="Deletar">
                    <Trash onClick={this.openAlertModal} />
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <RegisterPetForm
          isOpen={this.state.isModalOpen}
          isClosed={this.closeModal}
          isRegister={this.state.isRegister} 
        />
        <AlertModal
          isOpen={this.state.isAlertModalOpen}
          isClosed={this.closeAlertModal}
        />
      </>
    );
  }
}

