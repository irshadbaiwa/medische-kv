"use client";

import { useState } from "react";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { Add } from "iconsax-reactjs";

export const AddTaskButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root
      lazyMount
      placement={"center"}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={{ base: "xs", lg: "md" }}
    >
      <Dialog.Trigger asChild>
        <Button
          bg="primary"
          borderRadius="10px"
          paddingX={3}
          size={{ base: "sm", lg: "md" }}
        >
          <Add size={16} />
          Add Task
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content padding={{ base: 4, lg: 6, "2xl": 8 }}>
            <Dialog.Header>
              <Dialog.Title>Add Task</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Dialog.Body>
            <Dialog.Footer marginTop={6}>
              <Button
                bg="primary"
                borderRadius="10px"
                paddingX={6}
                size={{ base: "sm", lg: "md" }}
                width={{ base: "100%", lg: "auto" }}
              >
                Create Task
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
