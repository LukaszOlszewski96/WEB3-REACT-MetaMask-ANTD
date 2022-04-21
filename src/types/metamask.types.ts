export type MetaMaskInit = {
  account: null;
  contract: null;
};

export type MetaMaskUnavailable = {
  account: null;
  contract: null;
};

export type MetaMaskNotConnected = {
  account: null;
  contract: null;
};

export type MetaMaskConnected = {
  account: string;
  contract: any;
};

export type MetaMaskState =
  | MetaMaskInit
  | MetaMaskUnavailable
  | MetaMaskNotConnected
  | MetaMaskConnected;

export type IMetaMaskContext = MetaMaskState & {
  connectMetaMask: () => void;
};
