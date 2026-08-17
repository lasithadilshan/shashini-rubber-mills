import { execSync } from 'child_process';

const token = process.argv[2];
if (!token) {
  console.error('Token required');
  process.exit(1);
}

try {
  execSync('git config user.email "lasithadilshan2025@gmail.com"');
  execSync('git config user.name "lasithadilshan"');
  execSync('git add -A');
  execSync('git commit -m "Configure GitHub Pages and deployment workflow" --allow-empty');
  execSync(`git push https://${token}@github.com/lasithadilshan/shashini-rubber-mills.git HEAD:main --force`, {
    stdio: 'inherit'
  });
  console.log('Successfully pushed all changes to main branch!');
} catch (e) {
  console.error('Error during git push:', e);
  process.exit(1);
}
