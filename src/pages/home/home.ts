import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

//TODO 1
declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	private markersJson=
	    	{
				markers:[
				{
					lat:"33.622981",//required
					lng:"-7.477735",//required
					title:"title is something 1",//optional
					snippet:"snippet is something 1"//optional
				},
				{
					lat:"33.622239",
					lng:"-7.483282",
					snippet:"snippet is something 2"
				},
				{
					lat:"33.615788",
					lng:"-7.487541",
					title:"title is something 3"
				}]
			};
 	constructor(private loadingController:LoadingController) {}
 	

 	async loadMap(){
 		const loading = await this.loadingController.create({
	      content: 'loading the map ...'
	    });
	    await loading.present();
	    //TODO 2

		cordova.plugins.HMSMapKit.loadMapWithMarkers(
			this.markersJson,
			(msg) => {
			    console.log(msg);
			    loading.dismiss();
			},(err) => {
			    console.log(err);
			    loading.dismiss();
			});
 	}
 	async checkHMS(){
 		const loading = await this.loadingController.create({
	      content: 'Check HMS ...'
	    });
	    await loading.present();

		cordova.plugins.HMSMapKit.isHMSAvailable(
			(msg) => {
			    console.log(msg);
			    alert(msg);
			    loading.dismiss();
			},(err) => {
			    alert(err);
			    loading.dismiss();
			});
 	}
 	async checkGMS(){
 		const loading = await this.loadingController.create({
	      content: 'Check GMS ...'
	    });
	    await loading.present();
		cordova.plugins.HMSMapKit.isGMSAvailable(
			(msg) => {
			    console.log(msg);
			    alert(msg);
			    loading.dismiss();
			},(err) => {
			    alert(err);
			    loading.dismiss();
			});
 	}

}
