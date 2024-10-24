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
import { RegisterServiceForm } from "./register-service-form";
import { AlertModal } from "../../commons/alert-modal";

export class ServicesPage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isAlertModalOpen: false,
      isRegister: true, 
    };
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  openModal = (isRegister = true) => { 
    this.setState({
      isModalOpen: true,
      isRegister, 
    });
  };

  openAlertModal = () => {
    this.setState({ isAlertModalOpen: true });
  };

  closeAlertModal = () => {
    this.setState({ isAlertModalOpen: false });
  };

  render() {
    return (
      <>
        <Button color="default" onClick={() => this.openModal(true)}>
          Adicionar Serviço
        </Button>
        <Table selectionMode="single" shadow="md">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nome</TableColumn>
            <TableColumn>Preço</TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>ID do serviço</TableCell>
              <TableCell>Nome do serviço</TableCell>
              <TableCell>Preço do serviço</TableCell>
              <TableCell>
                <div className="flex flex-row gap-3 text-zinc-400">
                  <Tooltip content="Editar  ">
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
        <RegisterServiceForm
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

