import { Component, OnInit } from '@angular/core';
import { CameraService } from './camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  message: string | undefined;

  constructor(private cameraServive: CameraService){}

  ngOnInit(): void {
    this.cameraServive.getCameras().subscribe({
      next: (res: any) => this.message = res.value.message,
      error: error => console.log(error)   
    });
  }
}
