import { App } from '@/app-main';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateVar} from '@utils/validateVar';

ValidateVar();

const app = new App([new UserRoute(), new AuthRoute()]);

app.listen();
