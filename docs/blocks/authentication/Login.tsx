import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Block } from '../../../src/layout/Block';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Divider } from '../../../src/layout';
import logo from '../../assets/reaviz.svg';

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[600px]"
    >
      <Card className="w-full p-12">
        <div className="flex flex-col items-center justify-center pt-2 mb-10">
          <img src={logo} alt="Logo" className="h-11 w-auto mb-2" />
          <h4 className="text-2xl font-sans font-bold mb-0">
            Login or create an account
          </h4>
          <span className="text-base text-panel-secondary-content font-sans">
            Welcome to Reablocks, powered by Good Code
          </span>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block className="mb-5">
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="email"
                  disabled={isSubmitting}
                  placeholder="user@goodcode.us"
                  value={value}
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Button
            type="submit"
            fullWidth
            variant="filled"
            color="primary"
            disabled={isSubmitting}
            className="mt-7 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus focus:outline-none transition-colors"
            startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                fill="none"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="#fff"
                    d="M7.833 4.667 6.9 5.6l1.733 1.733h-6.8v1.334h6.8L6.9 10.4l.933.933L11.167 8 7.833 4.667Zm6 8H8.5V14h5.333c.734 0 1.334-.6 1.334-1.333V3.333c0-.733-.6-1.333-1.334-1.333H8.5v1.333h5.333v9.334Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.5 0h16v16H.5z" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
          <Divider className="mt-5 mb-5" variant="secondary" />
          <Button
            fullWidth
            variant="outline"
            startAdornment={
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16">
                <g clip-path="url(#a)">
                  <path
                    fill="currentColor"
                    d="M8.5 1.333A6.674 6.674 0 0 0 1.833 8 6.674 6.674 0 0 0 8.5 14.667 6.674 6.674 0 0 0 15.167 8c0-.314-.028-.613-.067-.9a.5.5 0 0 0-.496-.433H8.667a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3.046c-.609 1.174-1.794 2-3.213 2A3.659 3.659 0 0 1 4.833 8a3.659 3.659 0 0 1 6.088-2.744.5.5 0 0 0 .684-.022L13.02 3.82a.5.5 0 0 0-.015-.721A6.627 6.627 0 0 0 8.5 1.333Zm0 1c1.292 0 2.46.452 3.412 1.181l-.742.741c-.762-.546-1.66-.922-2.67-.922a4.664 4.664 0 0 0-3.883 2.088l-.8-.612A5.654 5.654 0 0 1 8.5 2.333ZM3.33 5.696l.827.632A4.617 4.617 0 0 0 3.833 8c0 .59.122 1.151.324 1.672l-.827.632A5.644 5.644 0 0 1 2.833 8c0-.823.183-1.6.497-2.304Zm5.837 1.97h4.974c.008.111.026.224.026.334 0 1.414-.534 2.69-1.387 3.681l-.78-.676c.427-.498.79-1.052.978-1.698a.5.5 0 0 0-.48-.64H9.167v-1Zm-4.55 2.913A4.664 4.664 0 0 0 8.5 12.667a4.636 4.636 0 0 0 2.803-.942l.756.655c-.974.793-2.202 1.287-3.559 1.287-1.95 0-3.665-.981-4.684-2.476l.801-.612Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.5 0h16v16H.5z" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            Sign up with Google
          </Button>
          <div className="mt-5 text-center text-panel-secondary-content text-sm">
            By signing in, you agree to our
            <Button variant="text" color="primary">
              terms of service
            </Button>
            and
            <Button variant="text" color="primary">
              privacy policy
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
