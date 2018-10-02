var app = new Vue({
  el: '#app',
  data: {
    message: 'Purple Team Field Manual'
  }
})

var identify = new Vue({
  el: '#identify',
  data: {
    chapter: 'Identify',
    category: 'Scanning and Vulnerabilities',
    application: [
      {
        applicationName: 'nmap',
        commandItem: [
          {
            description: 'Ping sweep for network:',
            command: '$ nmap -sn -PE <IP ADDRESS OR RANGE>',
            example: '$ nmap -sn -PE 192.168.1.1'
          },
          {
            description: 'Scan and show open ports:',
            command: '$ nmap --open <IP ADDRESS OR RANGE>',
            example: '$ nmap --open 192.168.1.1'
          },
          {
            description: 'Determine open services:',
            command: '$ nmap -sV <IP ADDRESS>',
            example: '$ nmap -sV 192.168.1.1'
          },
          {
            description: 'Scan two common TCP ports, HTTP and HTTPS:',
            command: '$ nmap -p 80,443 <IP ADDRESS OR RANGE>',
            example: '$ nmap -p 80,443 192.168.1.1'
          },
          {
            description: 'Scan common UDP port, DNS:',
            command: '$ nmap -sU -p 53 <IP ADDRESS OR RANGE>',
            example: '$ nmap -sU -p 52 192.168.1.1'
          },
          {
            description: 'Scan UDP and TCP together, be verbose on a single host and include optional skip ping:',
            command: '$ nmap -v -Pn -sU -sT -p U:53,11,137,T:21-25,80,189,8080 <IP ADDRESS>',
            example: '$ nmap -v -Pn -sU -sT -p U:53,11,137,T:21-25,80,189,8080 192.168.1.1'
          },
          {
            description: 'Scan open services with default scripts and output to a file w/all formats:',
            command: '$ nmap -v -sC -sV -oA results <IP ADDRESS OR RANGE>',
            example: '$ nmap -v -sC -sV -oA results 192.168.1.1'
          }
        ]
      },
      {
        applicationName: 'Nessus',
        commandItem: [
          {
            description: 'Basic Nessus scan:',
            command: '$ nessus -q -x -T html <NESSUS SERVER IP ADDRESS> <NESSUS SERVER PORT 1241> <ADMIN ACCOUNT> <ADMIN PASSWORD> <FILE WITH TARGETS>.txt <RESULTS FILE NAME>.html',
            example: '$ nessus -q -x -T html 192.168.1.1 1241 administrator l33tPassword /usr/share/user_list.txt nessus_results.html'
          },
          {
            description: 'Basic Nessus scan:',
            command: '$ nessus [-vnh] [-c .rcfile] [-V] [-T <format>]',
            example: 'Needs to be completed'
          },
          {
            description: 'Batch-mode scan:',
            command: '$ nessus -q [-pPS] <HOST> <PORT> <USERNAME> <PASSWORD> <target-file> <result-file>',
            example: '$ nessus -q [-pPS] 192.168.1.1 1241 admin l33tpassword /usr/share/targets.txt nessus-results.txt'
          },
          {
            description: 'Report conversion:',
            command: '$ nessus -i in.[nsr|nbe] -o out.[xml|nsr|nbe|html|txt]',
            example: '$ nessus -i in.nsr -o out.txt'
          }
        ]
      },
      {
        applicationName: 'Windows',
        commandItem: [
          {
            description: 'Basic network discovery:',
            command: 'C:\\> net view /all'
          },
          {
            description: 'Host specific network discovery:',
            command: 'C:\\> net view \\<HOST NAME>',
            example: 'C:\\> net view \\fileserver'
          },
          {
            description: 'Basic ping scan and write output to file (CMD):',
            command: 'C:\\> for /L %I in (1,1,254) do ping -w 30 -n 1 192.168.1.%I | find "Reply" >> <OUTPUT FILE>.txt',
            example: 'C:\\> for /L %I in (1,1,254) do ping -w 30 -n 1 192.168.1.%I | find "Reply" >> ping_results.txt'
          },
          {
            description: 'Basic ping scan and write output to file (PowerShell):',
            command: 'PS C:\\> 1..254 | ForEach-Object {Get-WmiObject Win32_PingStatus -Filter "Address=\'<IP ADDRESS CLASS >.$_\' and Timeout=200 and ResolveAddressNames=\'true\' and StatusCode=0" | select ProtocolAddress} >> <OUTPUT FILE>.txt',
            example: 'PS C:\\> 1..254 | ForEach-Object {Get-WmiObject Win32_PingStatus -Filter "Address=\'192.168.1.$_\' and Timeout=200 and ResolveAddressNames=\'true\' and StatusCode=0" | select ProtocolAddress} >> ping_results.txt'
          }
        ]
      },
      {
        applicationName: 'DHCP',
        commandItem: [
          {
            description: 'Enable DHCP server logging:',
            command: 'C:\\> reg add HKLM\\System\\CurrentControlSet\\Services\\DhcpServer\\Parameters /v ActivityLogFlag /t REG_DWORD /d 1'
          },
          {
            description: 'Default location Windows 2003/2008/2012',
            command: 'C:\\> %windir%\\System32\\Dhcp'
          }
        ]
      },
      {
        applicationName: 'DNS',
        commandItem: [
          {
            description: 'Default location Windows 2003:',
            command: 'C:\\> %SystemRoot%\\System32\\Dns'
          },
          {
            description: 'Default location Windows 2008:',
            command: 'C:\\> %SystemRoot%\\System32\\Winevt\\Logs\\DNSServer.evtx'
          },
          {
            description: 'Default location of enhanced DNS Windows 20012 R2:',
            command: 'C:\\> %SystemRoot%\\System32\\Winevt\\Logs\\Microsoft-Windows-DNSServer%4Analytical.etl'
          }
        ]
      }
    ]
    }
})