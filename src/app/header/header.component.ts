import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(private dataStorageService:DataStorageService){}

  ngOnInit(){
    this.onFetchData()
  }

  onSaveData(){
    this.dataStorageService.storeRecipe()
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe()
  }
}
