'use client';

import { Modal } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

import { CloseButton, ImageContainer, ModalContent } from './styles';

interface ImageModalProps {
  open: boolean;
  image: string | null;
  altText: string;
  onClose: () => void;
}

export function ImageModal({ open, image, altText, onClose }: ImageModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        },
      }}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <CloseIcon fontSize="inherit" />
        </CloseButton>
        {image && (
          <ImageContainer>
            <Image src={image} alt={altText} fill style={{ objectFit: 'contain' }} />
          </ImageContainer>
        )}
      </ModalContent>
    </Modal>
  );
}
