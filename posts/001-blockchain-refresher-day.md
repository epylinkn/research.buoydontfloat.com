---
title: "[001] Blockchain Refresher"
date: "2022-01-10"
---

My hope for Day 1 of 100 Days of Making(DAO?) was to start off by implementing a vanilla DAO -- i.e. the most basic implementation of a DAO in solidity.

But... the state of blockchain has progressed insanely fast since I was last into it. =P

First off, there are DAO providers now (see: DaoHaus). This is great news, but a bit harder as playing around costs real money, whereas before I built toys for free on a test network like Ropsten. The second big change is that Ethereum has gone up a in value, and accordingly gas prices are non-trivial.

Anyway, I'm dipping my toes into this after a long hiatus, and it looks like the right move is to not use Ethereum, but something layer 2 or sidechain, as it's cheaper. But still, just executing a bridge transaction of Ether to Polygon is going to cost me >$100. =[

I spent the day reading up about different DAO providers. This is a completely new concept, as a few years back we had to deploy a DAO contract by hand, e.g. your own solidity contract built on top of OpenZeppelin. But now, we have easy-to-use, Heroku-like platforms for deploying DAOs and interacting with them. This is going to be exciting because it'll be much easier to iterate!

I'm tired from a full night of (reading) research, so there isn't much to post here. For future me, I want to just kind of highlight all the new concepts I encountered today in keyword form with the hopes that I can look back on the progress I've made on Day 100.

Keyword soup:
- uniswap - contracts to swap between tokens
- DAO platforms- daohaus / colony / aragon / daostack
- bridge - intuitively, locking tokens on one network to use them on another network...; technically, no clue =[
- Polygon / MATIC / Plasma vs PoS
- xDAI, Binance Smart Coin, Solana
- transaction peak hours
- shares, loot, summon, guildkick, ragekick, ragequit
- Moloch
- boosts (for extending DAOs)
- minions (for interacting with other smart contracts)
- sushiswap, gnosis safe and multisig, superfluid
- gas tracker (I know understand why everyone has desktop pcomp gas trackers now!)
- also: next.js / vercel
