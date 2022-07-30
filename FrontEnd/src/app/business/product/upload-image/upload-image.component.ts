import { Component, OnInit } from '@angular/core';
import { UploadImage } from 'src/app/shared-components/model/uploadImage.model';
import { ApiProductService } from 'src/app/shared-components/service/api-product.service';


// Maximum file size allowed to be uploaded = 2MB
const MAX_SIZE: number = 2048576;

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  
  selectedImage:File | any = null;
  selectedProductId:number = 1;

  constructor(private apiProductService: ApiProductService ) { 
  }


  ngOnInit(): void {
  }

  onImageSelected(event:any): void {
    this.selectedImage = <File>event.target.files[0];
   
  }

  
  uploadImage(): void {
    // this.onImageSelected(this.selectedImage);
    console.log(this.selectedImage);
    this.apiProductService.uploadProductImage(this.selectedImage, this.selectedProductId.toString()).subscribe(res=>{
      console.log(res);
    });
  }

}
