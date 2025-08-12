import React, { useState, useEffect } from 'react';
import MainTemplate from '../templates/MainTemplate';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) {
      navigate(location.state.from);
    }
  }, [location.state, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (attempts >= 3) {
      setError('Demasiados intentos fallidos. Intenta más tarde.');
      return;
    }

    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/admin', { replace: true });
      } else {
        setAttempts(prev => prev + 1);
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-12 max-w-md mt-24">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="lock" size="xl" className="text-blue-600" />
            </div>
            <Typography variant="h1" className="mb-2 text-2xl font-bold">
              Panel de Administración
            </Typography>
            <Typography variant="p" className="text-gray-600">
              Acceso exclusivo para administradores
            </Typography>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-start">
              <Icon name="alert-circle" className="mr-2 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {attempts >= 2 && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-md">
              <Typography variant="p" className="flex items-center">
                <Icon name="alert-triangle" className="mr-2" />
                {attempts === 2 ? 'Último intento disponible' : 'Cuenta temporalmente bloqueada'}
              </Typography>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Correo electrónico"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              placeholder="ejemplo@dominio.com"
            />
            
            <div className="relative">
              <Input
                label="Contraseña"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                tabIndex={-1}
              >
                <Icon name={showPassword ? 'eye-off' : 'eye'} size="sm" />
              </button>
            </div>

            <div className="pt-2">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full flex items-center justify-center"
                disabled={isLoading || attempts >= 3}
              >
                {isLoading ? (
                  <>
                    <Icon name="loader" className="animate-spin mr-2" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <Icon name="lock" className="mr-2" />
                    Iniciar sesión
                  </>
                )}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <Typography variant="p">
              ¿Problemas para acceder?{' '}
              <a 
                href="mailto:soporte@techshop.com" 
                className="text-blue-600 hover:underline"
                rel="noopener noreferrer"
              >
                Contactar soporte
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Login;