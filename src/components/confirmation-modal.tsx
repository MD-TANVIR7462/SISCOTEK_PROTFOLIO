"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Trash2 } from "lucide-react";
import { Fragment } from "react";

type ConfirmationModalProps = {
  onConfirm(): void;
};

export function ConfirmationModal({
  onConfirm,
}: Readonly<ConfirmationModalProps>) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Fragment>
      <Button onPress={onOpen} fullWidth size="lg" className="mt-4">
        <Trash2 className="h-5 w-5" />
        <span>Delete</span>
      </Button>
      <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Confirmation</ModalHeader>
              <ModalBody>Are you sure you want to delete this?</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onConfirm();
                    onClose();
                  }}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
