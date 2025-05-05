import React from 'react'
import { it, expect, describe } from 'vitest'
import {render,screen} from "@testing-library/react"
 import  Greet from "../../src/components/Greet"
 import ProductImageGallery from "../../src/components/ProductImageGallery"
 import "@testing-library/jest-dom/vitest"

 describe('ProductImageGallery', () => {

     
    it('should render nothing if given an empty array  ', () => {
      const result=  render(<ProductImageGallery imageUrls={[]} />)
      expect(result.container).toBeEmptyDOMElement();


    }) 
    it('should render list of the images  ', () => {
        const imageUrls=['url1','url2']
        const result=  render(<ProductImageGallery imageUrls={imageUrls} />)
        const images= screen.getAllByRole("img");
        expect(images).toHaveLength(2);
        imageUrls.forEach((url,index)=>{
            expect(images[index]).toHaveAttribute('src',url);
        }) 
      }) 
 })


 
 