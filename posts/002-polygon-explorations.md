---
title: "002: Polygon Explorations"
date: "2022-01-11"
---

Another day of research as I familiarize myself with DAO making and operating before I throw away all my funds. =P

I find I get a better understanding when I look at simple implementations, rather than walls of text.

From my old knowledge, my understanding is that you can create a smart contract DAO and have all the proposals and voting take place on chain.

If you enjoy reading code, here's a pretty good example of what a DAO contract can look like: [Figment.io Tutorial: Build a DAO](https://learn.figment.io/tutorials/build-a-dao-on-celo#overview). Pay particular attention to the `function vote`. Imagine you have a DAO with 10 stakeholders. To effectively make a decision, you would need 1 transaction to create the proposal and 10 transactions for each stakeholder to vote, meaning 11 transactions each in need of gas! In today's prices, thats a lot of gas!

.info[
    If you want to get more fancy:
    https://github.com/MolochVentures/moloch#overview
]

Seems like this problem has currently been mitigated in a couple different ways:
- Polygon and similar L2 solutions where transactions are cheaper
- Moving voting off-chain, e.g. Discord is popular
  - sometimes returning the result on-chain, e.g. via an oracle
  
In trying to wrap my head around Polygon, I had to understand what a (ERC20) "bridge" is. It's essentially a vehicle to deposit your tokens on the root chain, and in turn receiving newly minted tokens on the second chain. And vice versa for withdrawals, where you tokens on the second chain instead get burned before your tokens are released on the root chain.

Anyway, here's a pretty good technical rundown:
https://docs.polygon.technology/docs/develop/ethereum-polygon/pos/getting-started/#steps-to-use-the-pos-bridge
