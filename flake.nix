{
  description = "Zhongwen - Chinese learning assistant";

  outputs = inputs @ {
    self,
    nixpkgs,
    utils,
    devToolkit,
  }:
    utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};
      in {
        devShell = devToolkit.lib.${system}.buildDevShell {
          name = "zhongwen";
          profiles = [
            "node"
          ];
        };
      }
    );

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";

    devToolkit = {
      url = "github:primamateria/dev-toolkit-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
}
