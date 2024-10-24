"use client";
import React, { Component } from "react";
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
import { DollarSign, Pen, Trash } from "lucide-react";
import { RegisterClientForm } from "./register-client-form";
import { AlertModal } from "../../commons/alert-modal";
import { ConsumeForm } from "./consume-form";

export class DashBoardPage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isAlertModalOpen: false,
      isConsumeModalOpen: false,
      isEditing: false, // New state to track if editing
    };
  }

  openModal = (isEditing = false) => {
    this.setState({ isModalOpen: true, isEditing });
  };

  openAlertModal = () => {
    this.setState({ isAlertModalOpen: true });
  };

  closeAlertModal = () => {
    this.setState({ isAlertModalOpen: false });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, isEditing: false });
  };

  openConsumeModal = () => {
    this.setState({ isConsumeModalOpen: true });
  };

  closeConsumeModal = () => {
    this.setState({ isConsumeModalOpen: false });
  };

  render() {
    const { isEditing } = this.state; // Destructure isEditing for easier access

    return (
      <>
        <Button color="default" onClick={() => this.openModal(false)}>
          Adicionar Cliente
        </Button>
        <Table selectionMode="single" shadow="md">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nome</TableColumn>
            <TableColumn>CPF</TableColumn>
            <TableColumn>Pets</TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>ID do Joaozinho</TableCell>
              <TableCell>Nome do Joaozinho</TableCell>
              <TableCell>Cpf do Joazinho</TableCell>
              <TableCell>Pets do Joazinho</TableCell>
              <TableCell>
                <div className="flex flex-row gap-3 text-zinc-400">
                  <Tooltip content="Consumir ">
                    <DollarSign onClick={this.openConsumeModal} />
                  </Tooltip>
                  <Tooltip content="Editar  ">
                    <Pen onClick={() => this.openModal(true)} />
                  </Tooltip>
                  <Tooltip content="Deletar">
                    <Trash onClick={this.openAlertModal} />
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <RegisterClientForm
          isOpen={this.state.isModalOpen}
          isClosed={this.closeModal}
          isRegister={!isEditing} 
        />
        <ConsumeForm
          isOpen={this.state.isConsumeModalOpen}
          isClosed={this.closeConsumeModal}
        />
        <AlertModal
          isOpen={this.state.isAlertModalOpen}
          isClosed={this.closeAlertModal}
        />
      </>
    );
  }
}
