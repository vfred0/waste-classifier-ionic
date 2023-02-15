import {Component} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage {
  image: string | undefined;

  constructor() {
    this.image = 'assets/images/scan.jpg';
  }

  async getPicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Prompt,
      width: 600,
      resultType: CameraResultType.Uri
    });

    this.image = image.webPath;

  }


  /*

    constructor(private platform: Platform, private viewportScroller: ViewportScroller, private toastController: ToastController) {
      this.image = '';
      this.isActiveCamera = false;
      this.orientation = "portrait-primary";
      this.trigger = new Subject<void>();
    }

    get positionButton(): string {
      return `ion-button {
      background-color: #fff;
      position: absolute;
      bottom: 0;
      left: ${this.getWidth() / 2}px;
      }`
    }

    ngOnInit() {
      this.platform.ready().then(() => {
        this.platform.resize.subscribe(() => {
          this.orientation = window.screen.orientation.type;
          if (this.orientation === 'portrait-primary') {
            this.startCameraWith(false);
          } else if (this.orientation === 'landscape-primary') {
            this.startCameraWith(true);
          }
          this.presentToast().then();
        });
      });
      this.startCameraWith(false);

    }

    async getPicture() {
      CameraPreview.capture(
        {
          quality: 100,
        }
      ).then((imageData) => {
        this.image = imageData.value;
        console.log(this.image);
        CameraPreview.stop();
      });
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: `Orientation: ${this.orientation}`,
        duration: 2000,
        color: 'primary',
        position: 'top'
      });
      toast.present().then();
    }

    getWidth() {
      return window.screen.width - 32;
    }

    getHeight() {
      return window.screen.height - 256;
    }

    private startCameraWith(isLandscape: boolean) {
      let cameraPreviewOptions: CameraPreviewOptions = {
        height: this.getHeight()-32,
        width: this.getWidth(),
        x: 16,
        y: 107 + 32,
      }
      if (isLandscape) {
        cameraPreviewOptions = {
          height: 50,
          width: 50,
          y: 50,
        }
      }
      CameraPreview.start(cameraPreviewOptions).then();
    }*/
}
