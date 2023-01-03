<template>
  <div id="app" class="main row">
    <div class="menu col">
      <div class="logo-container">
        <div class="logo" alt="Cash Force" />
      </div>
      <div class="menu-item row">
        <div class="proposta-icon" alt="Aperto de Mão"/>
        <p>Notas Fiscais</p>
      </div>
    </div>
    <div class="content col">
      <div class="header-content"></div>
      <div class="title-content col">
        <div class="row">
          <div class="proposta-icon-2" alt="Aperto de Mão"/>
          <h3>Notas Fiscais</h3>
        </div>
        <p>Visualize as notas fiscais que você tem.</p>
      </div>
      <div class="grid-content col">

            <div class="wrapper header row">
              <div>NOTA FISCAL</div>
              <div>SACADO</div>
              <div>CEDENTE</div>
              <div>EMISSÃO</div>
              <div>VALOR</div>
              <div>STATUS</div>
            </div>

            <div v-for='order in reviewOrders' :key=order.id class="wrapper content-item">
              <div>{{order.orderNumber}}</div>
              <div>{{order.buyer.name}}</div>
              <div>{{order.provider.name}}</div>
              <div>{{order.emissionDate}}</div>
              <div>{{order.value}}</div>
              <div>{{order.orderStatusBuyer}}</div>
              <div><button>Dados do cedente</button></div>
            </div>

      </div>
    </div>
  </div>
</template>

<script>

import Orders from './services/orders';

const status = {
  0: 'Pendente de confirmação',
  1: 'Pedido confirmado',
  2: 'Não reconhece o pedido',
  3: 'Mercadoria não recebida',
  4: 'Recebida com avaria',
  5: 'Devolvida',
  6: 'Recebida com devolução parcial',
  7: 'Recebida e confirmada',
  8: 'Pagamento Autorizado',
}

export default {

  data() {
    return {
      orders: [],
    };
  },

  computed: {
    reviewOrders() {
      return this.orders.map((order) => {
        return {
          ...order,
          emissionDate: new Date(order.emissionDate).toLocaleDateString('pt-BR'),
          value: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.value),
          orderStatusBuyer: status[order.orderStatusBuyer],
        };
      });
    }
  },

  mounted() {
   Orders.list().then((response) => {
     this.orders = response.data;
   });
  }, 

};

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
}

:root {
  --p-blue-2: #CAD3FF;
  --p-dark-blue-5: #021B51;
  --p-green-5: #00AD8C;
  --ndark-3: #4D5566;
  --n-mid-4: #DFE2EB;
  --n-dark-4: #727D94;
  --n-mif-1: #A1A8B8;
  --n-light-4: #FBFDFE
}

.col {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
}

.main {
  width: 100vw;
  height: 100vh;
  /* background-color: var(--p-blue-2); */
}

.menu {
  width: 288px;
  height: 100vh;
  background-color: var(--n-light-4);
}
.logo-container {
  width: 100%;
  height: 80px;
}

.logo {
  margin-left: 24px;
  margin-top: 24px;
  width: 160px;
  height: 30px;
  background-size: cover;
  background-image: url('assets/Logo.svg');
}

.menu-item{
  width: 100%;
  height: 65px;
  align-items: center;
}

.menu-item:hover{
  border-left: solid 4px var(--p-green-5);
}

.menu-item p{
  margin-left: 15px;
  font-size: 14px;
  font-weight: 500;
  color: var(--p-green-5);
}

.proposta-icon {
  width: 24px;
  height: 24px;
  margin-left: 24px;
  background-size: cover;
  background-image: url('assets/proposta.svg');
}

.proposta-icon-2 {
  width: 24px;
  height: 24px;
  margin-right: 9px;
  background-size: cover;
  background-image: url('assets/proposta2.svg');
}

.content {
  width: 100%;
}

.header-content {
  height: 64px;
  border-bottom: solid 1px var(--n-mid-4);
}

.title-content {
  margin-top: 40px;
}

.title-content h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--p-dark-blue-5);
}

.title-content p {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: var(--n-dark-4);
  line-height: 20px;
}

.grid-content {
  margin-top: 19px;
  width: 90%;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.header {
  align-items: center;
  font-size: 12px;
  height: 22px;
  font-weight: 700;
  color: var(--n-mif-1);
  margin-bottom: 19px;
}

.header div:first-child {
  margin-left: 24px;
}

.content-item {
  align-items: center;
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ndark-3);
  border: solid 1px var(--n-mid-4);
  border-radius: 6px;
  margin-bottom: 16px
}

.content-item div:first-child {
  margin-left: 24px;
}

.content-item div:nth-child(5) {
  color: var(--p-green-5);
}

.content-item div:nth-child(6) {
  color: var(--p-green-5);
    font-size: 12px;
}

.content-item button {
  width: 165px;
  height: 32px;
  border: solid 1px var(--p-blue-2);
  border-radius: 24px;
  background-color: transparent;
  color: var(--n-dark-4);
  font-size: 12px;
  font-weight: 700;
  margin-left: 24px;
}

.content-item button:hover {
  border: solid 1px var(--p-green-5);
}

</style>
