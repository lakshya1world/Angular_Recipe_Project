import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a new recipe', 'https://i0.wp.com/www.thecapablestudent.com/wp-content/uploads/2016/10/recipe-575434_640-1.png'),
    new Recipe('Recipe logo', 'My recipe logo', 'http://securewebtechnologies.com/wp-content/uploads/2017/11/my-recipe-logo.png'),
    new Recipe('Best Indian recipe', 'Best Indian recipe', 'https://4.bp.blogspot.com/-OAFFOcbDg7w/Vw0hiNi8RiI/AAAAAAAAAMw/gAJHVkAdZH863Bg5v055Y-1eGvXEm60ogCLcB/s1600/best-indian-recipes.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
