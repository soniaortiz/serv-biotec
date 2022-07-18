import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import {Product} from  '../product/Product';
import {listaDeProductos} from '../product/productos';

export function Gallery() {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: '100%'
      }}
      onClick={({target})=>{console.log('??????', target)}}
    >
      <ImageListItem key="subheader" cols={2}>
        <ListSubheader>Catálago de Productos</ListSubheader>
      </ImageListItem>
      <>
       { 
       listaDeProductos.map(({nombre, src, desc}, index)=>{
        return <Product name={nombre} src={src} desc = {desc} key={index}/>;
       })
       }

      </>


      
    </ImageList>
  );
}
