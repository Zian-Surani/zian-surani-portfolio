
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
    'F = ma',
    'E = mc²',
    'ψ(x,t) = Ae^(i(kx-ωt))',
    'S = k log W',
    'dS ≥ 0',
    'F⃗ = q(E⃗ + v⃗ × B⃗)',
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
    'η = W/Qh'
  ];

  useEffect(() => {
    const generateFormula = () => {
      const newFormula = {
        id: Math.random(),
        formula: mathFormulas[Math.floor(Math.random() * mathFormulas.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        opacity: 0.1 + Math.random() * 0.15,
        fontSize: 12 + Math.random() * 8
      };
      
      setFormulas(prev => [...prev.slice(-15), newFormula]);
    };

    const interval = setInterval(generateFormula, 2000);
    
    // Generate initial formulas
    for (let i = 0; i < 8; i++) {
      setTimeout(() => generateFormula(), i * 300);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {formulas.map((formula) => (
        <div
          key={formula.id}
          className="absolute font-mono text-cyan-400/20 select-none floating-formula"
          style={{
            left: `${formula.x}%`,
            top: `${formula.y}%`,
            transform: `rotate(${formula.rotation}deg)`,
            opacity: formula.opacity,
            fontSize: `${formula.fontSize}px`,
            animation: `floatFormula ${20 + Math.random() * 15}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {formula.formula}
        </div>
      ))}
    </div>
  );
};

export default MathFormulasBackground;
