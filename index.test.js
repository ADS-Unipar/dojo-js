const { converterIndoArabicoParaRomano, converterRomanoParaIndoArabico } = require(".");


describe("Conversão de Indo-Arábico para Romano", () => {
    it("deve converter 1 para I", () => {
      expect(converterIndoArabicoParaRomano(1)).toBe("I");
    });
  
    it("deve converter 5 para V", () => {
      expect(converterIndoArabicoParaRomano(5)).toBe("V");
    });
  
    it("deve converter 10 para X", () => {
      expect(converterIndoArabicoParaRomano(10)).toBe("X");
    });
  
    it("deve converter 50 para L", () => {
      expect(converterIndoArabicoParaRomano(50)).toBe("L");
    });
  
    it("deve converter 100 para C", () => {
      expect(converterIndoArabicoParaRomano(100)).toBe("C");
    });
  
    it("deve converter 500 para D", () => {
      expect(converterIndoArabicoParaRomano(500)).toBe("D");
    });
  
    it("deve converter 1000 para M", () => {
      expect(converterIndoArabicoParaRomano(1000)).toBe("M");
    });

    it("deve converter 3 para III", () => {
      expect(converterIndoArabicoParaRomano(3)).toBe("III");
    });
  
    it("deve converter 8 para VIII", () => {
      expect(converterIndoArabicoParaRomano(8)).toBe("VIII");
    });
  
    it("deve converter 49 para XLIX", () => {
      expect(converterIndoArabicoParaRomano(49)).toBe("XLIX");
    });
  
    it("deve converter 99 para XCIX", () => {
      expect(converterIndoArabicoParaRomano(99)).toBe("XCIX");
    });
  
    it("deve converter 400 para CD", () => {
      expect(converterIndoArabicoParaRomano(400)).toBe("CD");
    });
  
    it("deve converter 900 para CM", () => {
      expect(converterIndoArabicoParaRomano(900)).toBe("CM");
    });
  
    it("deve converter 1999 para MCMXCIX", () => {
      expect(converterIndoArabicoParaRomano(1999)).toBe("MCMXCIX");
    });
  });

  describe("Conversão de Indo-Arábico para Romano", () => {
    it("deve converter 0 para vazio", () => {
      expect(converterIndoArabicoParaRomano(0)).toBe("");
    });
  
    it("deve converter números negativos para vazio", () => {
      expect(converterIndoArabicoParaRomano(-1)).toBe("");
    });
  
    it("deve converter NaN para vazio", () => {
      expect(converterIndoArabicoParaRomano(NaN)).toBe("");
    });
  
    it("deve converter strings para vazio", () => {
      expect(converterIndoArabicoParaRomano("abc")).toBe("");
    });
  });

  describe("Conversão de Números Romanos para Indo-arábicos", () => {
    it("deve converter I para 1", () => {
      expect(converterRomanoParaIndoArabico("I")).toBe(1);
    });
  
    it("deve converter V para 5", () => {
      expect(converterRomanoParaIndoArabico("V")).toBe(5);
    });
  
    it("deve converter X para 10", () => {
      expect(converterRomanoParaIndoArabico("X")).toBe(10);
    });
  
    it("deve converter L para 50", () => {
      expect(converterRomanoParaIndoArabico("L")).toBe(50);
    });
  
    it("deve converter C para 100", () => {
      expect(converterRomanoParaIndoArabico("C")).toBe(100);
    });
  
    it("deve converter D para 500", () => {
      expect(converterRomanoParaIndoArabico("D")).toBe(500);
    });
  
    it("deve converter M para 1000", () => {
      expect(converterRomanoParaIndoArabico("M")).toBe(1000);
    });
  
    it("deve converter MCMXCIV para 1994", () => {
      expect(converterRomanoParaIndoArabico("MCMXCIV")).toBe(1994);
    });
  
    it("deve converter MMMDCCCLXXXVIII para 3888", () => {
      expect(converterRomanoParaIndoArabico("MMMDCCCLXXXVIII")).toBe(3888);
    });
  });

  describe("Casos Negativos", () => {
    it("deve lançar erro para IVX", () => {
      expect(() => converterRomanoParaIndoArabico("IVX")).toThrowError(/Número romano inválido/);
    });
  
    it("deve lançar erro para IL", () => {
      expect(() => converterRomanoParaIndoArabico("IL")).toThrowError(/Número romano inválido/);
    });
  
    it("deve lançar erro para CMXCIX", () => {
      expect(() => converterRomanoParaIndoArabico("CMXCIX")).toThrowError(/Número romano inválido/);
    });
  
    it("deve lançar erro para MMMCMXCIX", () => {
      expect(() => converterRomanoParaIndoArabico("MMMMCMXCIX")).toThrowError(/Número romano inválido/);
    });
  
    it("deve lançar erro para string vazia", () => {
      expect(() => converterRomanoParaIndoArabico("")).toThrowError(/Número romano inválido/);
    });
  });
  