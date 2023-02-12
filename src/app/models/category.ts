import {CategoryInterface} from "./category.interface";
import {CategoryEnum} from "./category.enum";
import {environment} from "../../environments/environment";

export interface CategoryDetails {
  categoryName: CategoryEnum;
  details: string[];
}

export class Category {

  private static DETAILS: CategoryDetails[] =
    [
      {
        categoryName: CategoryEnum.Battery,
        details: ['AAA', 'Laptops', 'Coches', 'Otros']
      },
      {
        categoryName: CategoryEnum.BrownGlass,
        details: ['Jarabes', 'Envases', 'Jarrones', 'Botellas']
      },
      {
        categoryName: CategoryEnum.WhiteGlass,
        details: ['Jarabes', 'Envases', 'Jarrones', 'Botellas']
      },
      {
        categoryName: CategoryEnum.GreenGlass,
        details: ['Jarabes', 'Envases', 'Jarrones', 'Botellas']
      },
      {
        categoryName: CategoryEnum.Plastic,
        details: ['Fundas plásticas', 'Envases', 'Tarros de pintura', 'Botellas']
      },
      {
        categoryName: CategoryEnum.Paper,
        details: ['Cuadernos', 'Periódicos', 'Revistas', 'Otros']
      },
      {
        categoryName: CategoryEnum.Cardboard,
        details: ['Cajas de zapatos', 'Cajas de leches', 'Cajas de dulces', 'Otros']
      },
      {
        categoryName: CategoryEnum.Clothes,
        details: ['Camisas', 'Vestidos', 'Pantalones', 'Camisetas']
      },
      {
        categoryName: CategoryEnum.Shoes,
        details: ['Casuales', 'Sandalias', 'Pantuflas', 'Botas']
      },
      {
        categoryName: CategoryEnum.Metal,
        details: ['Papel aluminio', 'Envases', 'Enlatados', 'Botellas']
      },
      {
        categoryName: CategoryEnum.Biological,
        details: ['Vegetales', 'Panes', 'Comidas', 'Frutas']
      },
      {
        categoryName: CategoryEnum.Trash,
        details: ['Cepillos de dientes', 'Mascarillas', 'Pañales', 'Otros']
      }
    ];
  static get all(): CategoryInterface[] {
    let result: CategoryInterface[] = [];
    Object.keys(CategoryEnum).forEach((key: string, index: number) => {
      result.push({
        imagePath: `${environment.imagePath}/${this.firstLetterLowercase(key)}.png`,
        name: Object.values(CategoryEnum)[index],
      });
    });
    return result;
  }

  static getDetails(category: CategoryInterface): CategoryInterface[] {
    let details: CategoryInterface[] = [];
    this.DETAILS.forEach((data: CategoryDetails) => {
      if (data.categoryName === category.name) {
        data.details.forEach((detail: string, index: number) => {
          details.push({
            imagePath: `${environment.detailsImagePath}/${this.getKeyName(data.categoryName)}/image${index+1}.png`,
            name: detail,
          });
        });
      }
    });

    return details;
  }

  private static getKeyName(categoryName: CategoryEnum): string {
    let keyName: string = Object.keys(CategoryEnum)[Object.values(CategoryEnum).indexOf(categoryName)];
    return this.firstLetterLowercase(keyName);
  }

  private static firstLetterLowercase(key: string) {
    return key.charAt(0).toLowerCase().concat(key.slice(1));
  }

}

