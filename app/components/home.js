import Component from '@glimmer/component';

export default class HomeComponent extends Component {
  toolsList = [
    {
      iconName: 'js.svg',
      label: 'JavaScript',
    },
    {
      iconName: 'html5.svg',
      label: 'HTML5',
    },
    {
      iconName: 'css3.svg',
      label: 'CSS3',
    },
    {
      iconName: 'emberjs.svg',
      label: 'EmberJs',
    },
    {
      iconName: 'git.svg',
      label: 'Git',
    },
    {
      iconName: 'gitlab.svg',
      label: 'GitLab',
    },
    {
      iconName: 'sass.svg',
      label: 'SASS',
    },
    {
      iconName: 'vscode.svg',
      label: 'VS Code',
    },
    {
      iconName: 'cmd.svg',
      label: 'Command Line',
    },
    {
      iconName: 'docker.svg',
      label: 'Docker',
    },
    {
      iconName: 'responsive.svg',
      label: 'Responsive Sites',
    },
  ];

  projectsList = [{
    imgName: '../../images/tpthreats-dev.png',
    title: 'Patch Vulnerability Integration',
    description: `Integrates Tenable's vast vulnerability coverage to detect vulnerabilities and remediate them immediately by pushing patches from ManageEngine Patch Manager Plus's console.`,
    knowMoreLink: `https://www.manageengine.com/patch-management/tenable-integration.html`
  }, {
    imgName: '../../images/pcp-mac.png',
    title: 'Patch Connect Plus',
    description: `Integrates with Microsoft SCCM and Intune to effectively extend the scope of the two endpoint management platforms and automate the distribution of third-party updates.`,
    knowMoreLink: `https://www.manageengine.com/sccm-third-party-patch-management`
  }, {
    imgName: '../../images/acp-dev.png',
    title: 'Application Control Plus',
    description: `A virtual checkpoint for all your applications and automates the placement of applications in allowlists and blocklists based on specified control rules.`,
    knowMoreLink: `https://www.manageengine.com/application-control`
  }];

  mediaLinks =[{
    newTabAction: true,
    href: 'https://www.linkedin.com/in/manoj-r-104276164/',
    ariaLabel: 'Visit my LinkedIn profile',
    imgName: 'linkedin.svg'
  }, {
    newTabAction: true,
    href: 'https://www.instagram.com/careless__soul__/',
    ariaLabel: 'Visit my Instagram profile',
    imgName: 'instagram.svg'
  }, {
    newTabAction: true,
    href: 'https://medium.com/@manojravi.official',
    ariaLabel: 'Visit my Medium profile',
    imgName: 'medium.svg',
    inputClass: 'medium'
  }, {
    newTabAction: true,
    href: 'https://leetcode.com/manojravi',
    ariaLabel: 'Check my LeetCode profile',
    imgName: 'leetcode.svg',
    inputClass: 'leetcode'
  }];
}
