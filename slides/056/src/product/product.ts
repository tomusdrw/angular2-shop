import {provide} from "angular2/core";

import Product from './entities/Product';
import {ProductRepository} from './repositories/ProductRepository';
import StaticJsonProductRepository from './repositories/StaticJsonProductRepository';
import InMemoryProductRepository from './repositories/InMemoryProductRepository';
import ProductComponent from './components/ProductComponent';
import ProductListComponent from './components/ProductListComponent';
import PromotedProductListComponent from './components/PromotedProductListComponent';
import ProductFilterPipe from './pipes/ProductFilterPipe';
import ProductSortPipe from './pipes/ProductSortPipe';
import ProductListWithSearchingComponent from "./components/ProductListWithSearchingComponent";
import RoutableProductComponent from './components/RoutableProductComponent';

const PRODUCT_PIPES = [ProductFilterPipe, ProductSortPipe];
const PRODUCT_DIRECTIVES = [ProductComponent, ProductListComponent, PromotedProductListComponent, ProductListWithSearchingComponent, RoutableProductComponent];
const PRODUCT_PROVIDERS = [
    provide("ProductRepository", {useClass: InMemoryProductRepository}),
    StaticJsonProductRepository,
    InMemoryProductRepository];

export {Product, ProductRepository, StaticJsonProductRepository, InMemoryProductRepository,
        ProductComponent, RoutableProductComponent, ProductListComponent, PromotedProductListComponent, ProductListWithSearchingComponent,
        ProductFilterPipe, ProductSortPipe,
        PRODUCT_DIRECTIVES, PRODUCT_PIPES, PRODUCT_PROVIDERS};
