import React, { Components } from "react";
import { MdAddShoppingCart } from "react-icons/md";

import api from "../../services/api";

import { ProductList } from "./styles";

export default class Home extends Components {
  render() {
    return (
      <ProductList>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-puma-radiate-xt-pattern-feminino/44/NWG-0521-244/NWG-0521-244_zoom1.jpg"
            alt="Tenis"
          />
          <strong>Tenis muito legal</strong>
          <span>R$129,90</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={36} color="#fff" />3
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
