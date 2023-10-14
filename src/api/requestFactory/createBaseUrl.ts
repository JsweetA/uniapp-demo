export default (hosts: any) => {
  return (): string => {
    let active: "DEV" | "UAT" | "PRO" = "UAT";
    const envVersion = uni.getAccountInfoSync().miniProgram.envVersion;
    console.log(envVersion, "envVersion");
    if (envVersion === "release") active = "PRO";

    return hosts[active];
  };
};
