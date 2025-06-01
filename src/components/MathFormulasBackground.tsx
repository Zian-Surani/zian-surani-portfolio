
import { useEffect, useState } from 'react';

const MathFormulasBackground = () => {
  const [formulas, setFormulas] = useState<Array<{
    id: number;
    formula: string;
    x: number;
    y: number;
    rotation: number;
    opacity: number;
    fontSize: number;
    color: string;
  }>>([]);

  const mathFormulas = [
    '∇²φ = ρ/ε₀',
    '∫f(x)dx = F(x) + C',
    'e^(iπ) + 1 = 0',
    '∂²u/∂t² = c²∇²u',
    'Σ(xi - μ)²/n = σ²',
    'λmax = arg max Σlog P(xi|θ)',
    '∮ E⃗ · dA⃗ = Q/ε₀',
    'H(X) = -Σ P(x) log P(x)',
    '∇ × B⃗ = μ₀J⃗ + μ₀ε₀ ∂E⃗/∂t',
    'P(A|B) = P(B|A)P(A)/P(B)',
    '∂L/∂θ = 0',
    'f(x) = Σ anxⁿ',
    '||w||² + λΣ|wi|',
    'Tr(AB) = Tr(BA)',
    'det(A) = Σ(-1)^σ ∏aᵢ,σ(ᵢ)',
    '∇J = ∂J/∂θ',
    'E[X] = Σ xi P(xi)',
    'Cov(X,Y) = E[XY] - E[X]E[Y]',
    '||x||p = (Σ|xi|^p)^(1/p)',
    'argmin Σ(yi - f(xi))²',
    'KL(P||Q) = Σ P(x) log(P(x)/Q(x))',
    '∂²f/∂x∂y = ∂²f/∂y∂x',
    'lim(x→∞) f(x) = L',
    'rank(AB) ≤ min(rank(A), rank(B))',
    'F⃗ = q(E⃗ + v⃗ × B⃗)',
    'ψ(x,t) = Ae^(i(kx-ωt))',
    'S = k log W',
    'dS ≥ 0',
    'G = H - TS',
    'PV = nRT',
    'ΔG = ΔH - TΔS',
    'λ = h/p',
    'ΔxΔp ≥ ℏ/2',
    'α = e²/4πε₀ℏc',
    '∇·B⃗ = 0',
    'curl F⃗ = ∇ × F⃗',
    'div F⃗ = ∇ · F⃗',
    'ΣFᵢ = 0',
    'Στᵢ = 0',
    'I = ∫∫∫ ρ dV',
    'v = u + at',
    's = ut + ½at²',
    'v² = u² + 2as',
    'T = 2π√(l/g)',
    'f = 1/2π√(k/m)',
    'Q = mcΔT',
    'η = W/Qh',
    'y = mx + c',
    'ax² + bx + c = 0',
    'sin²θ + cos²θ = 1',
    'e^x = Σ x^n/n!',
    'ln(xy) = ln(x) + ln(y)',
    '∫e^x dx = e^x + C',
    'd/dx[x^n] = nx^(n-1)',
    'lim(h→0) [f(x+h)-f(x)]/h',
    'Var(X) = E[X²] - (E[X])²',
    'Z = (X - μ)/σ',
    'P(X = k) = λ^k e^(-λ)/k!',
    'f\'(x) = lim(h→0) [f(x+h)-f(x)]/h',
    '∫₀^∞ e^(-x²) dx = √π/2',
    'Γ(n) = (n-1)!',
    'ζ(s) = Σ 1/n^s',
    'φ(n) = n∏(1-1/p)',
    'F = G(m₁m₂)/r²',
    'E = hf',
    'c = λf',
    'p = mv',
    'W = F·d',
    'P = W/t',
    'V = IR',
    'P = I²R'
  ];

  const colors = [
    'rgba(0, 255, 255, ',
    'rgba(0, 150, 255, ',
    'rgba(100, 200, 255, ',
    'rgba(50, 255, 200, ',
    'rgba(150, 150, 255, '
  ];

  useEffect(() => {
    const generateFormula = () => {
      const newFormula = {
        id: Math.random(),
        formula: mathFormulas[Math.floor(Math.random() * mathFormulas.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        opacity: 0.15 + Math.random() * 0.25,
        fontSize: 10 + Math.random() * 12,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      
      setFormulas(prev => [...prev.slice(-25), newFormula]);
    };

    // More frequent generation for better visibility
    const interval = setInterval(generateFormula, 800);
    
    // Generate initial formulas
    for (let i = 0; i < 15; i++) {
      setTimeout(() => generateFormula(), i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {formulas.map((formula) => (
        <div
          key={formula.id}
          className="absolute font-mono select-none floating-formula"
          style={{
            left: `${formula.x}%`,
            top: `${formula.y}%`,
            transform: `rotate(${formula.rotation}deg)`,
            color: `${formula.color}${formula.opacity})`,
            fontSize: `${formula.fontSize}px`,
            animation: `floatFormula ${15 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
            textShadow: `0 0 10px ${formula.color}0.5)`,
            fontWeight: Math.random() > 0.5 ? '600' : '400'
          }}
        >
          {formula.formula}
        </div>
      ))}
    </div>
  );
};

export default MathFormulasBackground;
