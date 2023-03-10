/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  SubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as TokenFaucetContractJson } from "../token.ral.json";

// Custom types for the contract
export namespace TokenFaucetTypes {
  export type Fields = {
    symbol: HexString;
    name: HexString;
    decimals: bigint;
    supply: bigint;
    balance: bigint;
  };

  export type State = ContractState<Fields>;

  export type WithdrawEvent = ContractEvent<{ to: HexString; amount: bigint }>;
}

class Factory extends ContractFactory<
  TokenFaucetInstance,
  TokenFaucetTypes.Fields
> {
  at(address: string): TokenFaucetInstance {
    return new TokenFaucetInstance(address);
  }

  async testGetSymbolMethod(
    params: Omit<TestContractParams<TokenFaucetTypes.Fields, never>, "testArgs">
  ): Promise<TestContractResult<HexString>> {
    return testMethod(this, "getSymbol", params);
  }

  async testGetNameMethod(
    params: Omit<TestContractParams<TokenFaucetTypes.Fields, never>, "testArgs">
  ): Promise<TestContractResult<HexString>> {
    return testMethod(this, "getName", params);
  }

  async testGetDecimalsMethod(
    params: Omit<TestContractParams<TokenFaucetTypes.Fields, never>, "testArgs">
  ): Promise<TestContractResult<bigint>> {
    return testMethod(this, "getDecimals", params);
  }

  async testGetTotalSupplyMethod(
    params: Omit<TestContractParams<TokenFaucetTypes.Fields, never>, "testArgs">
  ): Promise<TestContractResult<bigint>> {
    return testMethod(this, "getTotalSupply", params);
  }

  async testBalanceMethod(
    params: Omit<TestContractParams<TokenFaucetTypes.Fields, never>, "testArgs">
  ): Promise<TestContractResult<bigint>> {
    return testMethod(this, "balance", params);
  }

  async testWithdrawMethod(
    params: TestContractParams<TokenFaucetTypes.Fields, { amount: bigint }>
  ): Promise<TestContractResult<null>> {
    return testMethod(this, "withdraw", params);
  }
}

// Use this object to test and deploy the contract
export const TokenFaucet = new Factory(
  Contract.fromJson(
    TokenFaucetContractJson,
    "=20-2+67=101+3a0007e02=1+75468652063757272656e742062616c616e63652069732000=46",
    "142f8d7201aa0279723529eb7b15f247c0e41a71d1f58d7bdbefa5264d16a7a8"
  )
);

// Use this class to interact with the blockchain
export class TokenFaucetInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<TokenFaucetTypes.State> {
    return fetchContractState(TokenFaucet, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeWithdrawEvent(
    options: SubscribeOptions<TokenFaucetTypes.WithdrawEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      TokenFaucet.contract,
      this,
      options,
      "Withdraw",
      fromCount
    );
  }

  async callGetSymbolMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<CallContractResult<HexString>> {
    return callMethod(
      TokenFaucet,
      this,
      "getSymbol",
      params === undefined ? {} : params
    );
  }

  async callGetNameMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<CallContractResult<HexString>> {
    return callMethod(
      TokenFaucet,
      this,
      "getName",
      params === undefined ? {} : params
    );
  }

  async callGetDecimalsMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<CallContractResult<bigint>> {
    return callMethod(
      TokenFaucet,
      this,
      "getDecimals",
      params === undefined ? {} : params
    );
  }

  async callGetTotalSupplyMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<CallContractResult<bigint>> {
    return callMethod(
      TokenFaucet,
      this,
      "getTotalSupply",
      params === undefined ? {} : params
    );
  }

  async callBalanceMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<CallContractResult<bigint>> {
    return callMethod(
      TokenFaucet,
      this,
      "balance",
      params === undefined ? {} : params
    );
  }
}
