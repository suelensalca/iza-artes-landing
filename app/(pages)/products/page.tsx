'use client';

import { Box, Grid, List, ListItem } from '@mui/material';
import { Menu, MenuTitle, MoreButton, Title } from './styles';
import Image from 'next/image';
import { productsMenu } from './constants';
import { useState } from 'react';
import { productsImgs } from './presenter';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const selectedItem = productsImgs.find((type) => type.id === selectedProduct);

  return (
    <Box display="flex">
      <Menu>
        <List>
          {productsMenu.map((product) => (
            <ListItem key={product.id} sx={{ padding: '2px 0' }}>
              <MenuTitle onClick={() => setSelectedProduct(product.id)}>{product.name}</MenuTitle>
            </ListItem>
          ))}
        </List>
      </Menu>
      <Grid
        container
        width="100%"
        m={{ xs: '20px 40px', sm: '20px', md: '40px', lg: '40px 60px', xxl: '60px 140px' }}
        spacing={{ xs: 2, lg: 3, xl: 6 }}>
        {selectedItem && (
          <>
            <Grid size={12}>
              <Title>{selectedItem.product}</Title>
            </Grid>
            {selectedItem.images.map((prod) =>
              selectedItem.id === 6 || selectedItem.id === 16 ? (
                <Grid
                  key={prod.id}
                  size={{ xs: 12, md: 6, xxl: 4 }}
                  position="relative"
                  minHeight={{ xs: 240, sm: 320, md: 260, lg: 300, xl: 380 }}>
                  <Image src={prod.image} alt={prod.name} fill style={{ objectFit: 'cover' }} />
                </Grid>
              ) : (
                <Grid
                  key={prod.id}
                  size={{ xs: 12, sm: 6, lg: 3 }}
                  position="relative"
                  minHeight={{ xs: 400, sm: 360, md: 520, lg: 300, xl: 380, xxl: 440 }}>
                  <Image src={prod.image} alt={prod.name} fill style={{ objectFit: 'cover' }} />
                </Grid>
              )
            )}
            <Grid size={12} textAlign="center">
              <MoreButton>faça um orçamento</MoreButton>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
