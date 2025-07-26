export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}"
   style="display: inline-block; background-color: #4CAF50; color: #fff; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; cursor: pointer;">
   Reset Password
</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const ROBOTIC_WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Kenikool Tech World</title>
</head>
<body style="font-family: 'Roboto Mono', 'Consolas', 'Courier New', monospace; background: #181f27; color: #e0e0e0; max-width: 600px; margin: 0 auto; padding: 0;">
  <div style="background: linear-gradient(90deg, #00c3ff 0%, #3a7bd5 100%); padding: 32px 0; text-align: center; border-radius: 8px 8px 0 0;">
    <img src="https://img.icons8.com/ios-filled/100/ffffff/robot-2.png" alt="Robot" width="64" height="64" style="margin-bottom: 16px;" />
    <h1 style="color: #fff; margin: 0; font-size: 2.2em; letter-spacing: 2px;">Welcome, <span style="color: #00ffd0;">{name}</span>!</h1>
  </div>
  <div style="background: #232b36; padding: 32px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
    <p style="font-size: 1.1em; margin-bottom: 24px;">🤖 <strong>Greetings, human!</strong></p>
    <p style="margin-bottom: 18px;">You have successfully joined <span style="color: #00ffd0;">RoboApp</span> — your futuristic platform for next-gen productivity and automation.</p>
    <p style="margin-bottom: 18px;">Our circuits are buzzing with excitement to have you on board. Get ready to experience a seamless, robotic workflow designed just for you.</p>
    <div style="text-align: center; margin: 32px 0;">
      <a href="{dashboardUrl}" style="background: linear-gradient(90deg, #00c3ff 0%, #3a7bd5 100%); color: #fff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 1.1em; letter-spacing: 1px; box-shadow: 0 2px 8px rgba(0,0,0,0.10);">Get Started</a>
    </div>
    <p style="font-size: 0.95em; color: #b0b0b0;">If you have any questions, our support bots are always online and ready to assist you.</p>
    <p style="margin-top: 32px; color: #00ffd0; font-size: 1.1em;">Welcome to the future!<br/>— The RoboApp Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message generated by RoboApp's neural network. Please do not reply to this email.</p>
  </div>
</body>
</html>
`;
