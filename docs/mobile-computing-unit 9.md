<div class="nav-wrapper">
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 1/" class="nav-item mobile-computing" data-title="Unit 1">Unit 1</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 2/" class="nav-item mobile-computing" data-title="Unit 2">Unit 2</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 3/" class="nav-item mobile-computing" data-title="Unit 3">Unit 3</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 4/" class="nav-item mobile-computing" data-title="Unit 4">Unit 4</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 5/" class="nav-item mobile-computing" data-title="Unit 5">Unit 5</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 6/" class="nav-item mobile-computing" data-title="Unit 6">Unit 6</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 7/" class="nav-item mobile-computing" data-title="Unit 7">Unit 7</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 8/" class="nav-item mobile-computing" data-title="Unit 8">Unit 8</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit 9/" class="nav-item mobile-computing" data-title="Unit 8">Unit 9</a>
</div>

## Embedded Operating Systems: Android and Symbian

## 1. Introduction to Embedded Operating Systems (E-OS)

- **Definition**: Software tailored for mobile devices, integrating OS, middleware, and applications to meet specific hardware constraints.
- **Purpose**: Addresses needs of mobile users, operators, developers, and manufacturers for customization, functionality, and stability.

**Examples**:
  - Android
  - Symbian OS
  - iOS
  - Windows CE
  - Palm OS
  - Embedded Linux (e.g., Open Zaurus, Metano GNU/Linux)

**Key Characteristics**:
  - Compact to fit limited memory.
  - Designed for standalone, portable devices.
  - Supports intermittent connectivity.
  - Open platform for third-party development.

## 2. Android Operating System
### 2.1 Introduction

- **Overview**: Software stack for mobile devices including OS, middleware, and key apps.
- **Base**: Linux OS, developed by Google and Open Handset Alliance (OHA).
- **Development**: Uses Java-like language with Google’s Java libraries; no native code support.
- **Launch**: Announced November 5, 2007, with OHA; released 2008 under Apache license.

### 2.2 Birth of Android

- **Acquisition**: Google acquired Android Inc. in July 2005 (key figures: Andy Rubin, Rich Miner, Nick Sears, Chris White).
- **OHA Formation**: November 2007, consortium of Google, HTC, Intel, Motorola, Qualcomm, etc., to promote open mobile standards.

- **Hardware Prototypes**:

    - Mobile World Congress (Feb 2008): Basic apps demoed.
    - Google I/O (May 2008): 528 MHz Qualcomm processor, 128 MB RAM, 256 MB flash, UMTS, 3.6 Mbit/s HSDPA.

### 2.3 Android Architecture
- **Layers**:
  1. **Kernel Layer**: Linux 2.6 for memory, process, security, networking, and drivers; acts as Hardware Abstraction Layer (HAL).

  2. **Native Libraries Layer**:
        - SGL (2D graphics), OpenGL ES (3D graphics).
        - SQLite (data storage), WebKit (web rendering).
        - Dalvik Virtual Machine: Optimized for mobile, converts Java bytecode to .dex for efficiency.
        - Core libraries: Java-based, System C library, Media Libraries, Surface Manager, FreeType.

  3. **Application Runtime**: Dalvik VM runs apps in separate processes; handles security, threading, memory via Linux kernel.
  4. **Application Framework Layer**: Java-based APIs for telephony, data sharing, notifications; uniform for all apps.
  5. **Applications Layer**: Core (e.g., Phone, Contacts) and third-party apps in Java, run by Dalvik VM.

- **Key Features**:

    - All apps equal (no distinction between core and third-party).
    - Third-party apps can replace core functions (e.g., dialer).

### 2.4 Application Building Blocks

- **Activity**: User interface screen; can be faceless, floating, or return values.
- **Intent Receiver**: Responds to broadcast intents (e.g., notifications, alarms); apps can define custom intents.
- **Service**: Background tasks (e.g., music playback, downloads).
- **Content Provider**: Enables data sharing across apps (e.g., contacts, gallery) via URI and MIME types.

### 2.5 Application Lifecycle
- **Process Management**:
    - Each app runs in its own process for security and performance.
    - Importance hierarchy for memory management:
        1. **Visible Process**: Activity visible but not foreground (e.g., dialog overlay).
        2. **Service Process**: Running background services (e.g., music, downloads).
        3. **Background Process**: Non-visible activities; killed based on LRU (Least Recently Used).
        4. **Empty Process**: No active components; cached for faster restarts.

- **Impact**: Incorrect use of components (Activity, Service, Broadcast Receiver) can lead to process termination during critical tasks.

### 2.6 Development Tools

- Java, Eclipse IDE, ADT Plug-in, Android SDK, Android Emulator, command-line tools, documentation.

### 2.7 Security Issues

- **Strengths**: Linux-based secure coding, solutions like McAfee and SMobile Systems (anti-virus, firewall).
- **Weaknesses**:
  - Open-source code vulnerable to black-hat hackers.
  - Risks: Trojans, viruses, unauthorized GPS tracking, malicious apps mimicking legitimate ones.
- **Mitigation**: SMobile Security Shield for alerts and blocking; no device is fully secure online.

### 2.8 Advantages

- Open API access to core functions.
- Equal treatment of all apps.
- Combines web and phone data for new experiences.
- Easy development with SDK and emulator.

### 2.9 Disadvantages

- Open-source invites hacker scrutiny.
- Unencrypted file system, vulnerable login.
- Dependence on hardware/carrier partners reduces Google’s control.

### 2.10 Why Android?

- Open-source, Flash support, diverse models, reasonable prices, Google Apps, utility apps (e.g., Astro, Taskiller).

### 2.11 Android Versions

- 1.1, 1.5 (Cupcake), 1.6 (Donuts), 2.0 (Éclair), 2.2 (Froyo), 2.3 (Gingerbread), 3.0 (Honeycomb).
- API levels ensure forward compatibility, not always backward.

## 3. Symbian Operating System
### 3.1 Introduction

- **Overview**: Designed for smartphones, supports multiple manufacturers, focuses on communication.
- **Market Needs**:

    - Small, mobile devices.
    - Mass-market appeal.
    - Intermittent connectivity.
    - Product differentiation.
    - Open platform for third-party apps.

- **Goal**: Compact yet feature-rich OS for 2.5G/3G networks, distinct from scaled-down PC OS.

### 3.2 Symbian History

- **Origin**: Evolved from Psion’s EPOC OS; renamed Symbian OS in 1998.
- **Ownership**: Ericsson, Nokia, Panasonic, Psion, Siemens, Sony-Ericsson; open licensing.
- **Devices**: Sony Ericsson P800, Nokia 9200 Communicator, NTT DoCoMo Fujitsu 2102V.

### 3.3 Fundamental Requirements

- Standalone portable operation.
- Supports diverse devices.
- Future-proof, open licensing.
- Open for app development.
- Based on open standards (e.g., POSIX, J2ME, Bluetooth).

### 3.4 Architecture

- **Layers**:

    1. **Core**: Kernel, file server, memory management, device drivers.
    2. **System Layer**: TCP/IP, IMAP4, SMS, database management.
    3. **Application Engines**: Interfaces for data access.
    4. **User Interface Software**: Customizable by manufacturers.
    5. **Applications**: Added above UI.

- **Design**: Hardware-independent, extendable, open for development.

### 3.5 Features

- **Client-Server Architecture**: Programs (clients) access resources via servers for timely responses.
- **Event Management**: Event-based time sharing in a single thread; supports interactive designs.
- **Object-Oriented Design**: Configurable for hardware, component-based, flexible UI.
- **Power Management**: Kernel-level efficiency; disables unused peripherals.
- **Robustness**: Protected address spaces prevent data loss or crashes.
- **Memory Management**: Minimizes usage; supports RAM and flash memory.
- **Full Multitasking**: Runs multiple apps concurrently (e.g., calendar during a call).

### 3.6 Platform Security

- **Trust**: Controls access to private data.
- **Security**: Manages costs, protects phone functions.
- **Protection**: Software ownership, DRM.
- **Mechanisms**: Trusted software installation, secure IPC, TCE (protects sensitive APIs).

### 3.7 Strengths

- **Memory Management**: Paging, address translation; no demand-paged virtual memory.
- **Execution in-Place**: Runs programs from flash memory, reducing RAM usage and load time.

### 3.8 Weaknesses

- No virtual memory; relies on RAM and flash.
- Limited memory impacts scalability.
### 3.9 Advantages

- Wide app range, high-quality games, better WAP browser, fast connectivity, media players.
- Supports software installation, large file downloads via 3G.

### 3.10 Disadvantages

- Not available for PCs.
- Susceptible to viruses.

## 4. Android vs. Symbian

- **Firmware Updates**:
    - **Symbian**: Requires new phone for major updates (e.g., s60v3 to s60v5).
    - **Android**: Software upgrades via phone/PC (e.g., 1.6 to 2.1).
- **Flashing**:
    - **Symbian**: Risky; themes or new firmware via PC; failure can brick phone.
    - **Android**: Safer; themes, launchers, or custom firmware via recovery menu; recoverable.
- **Feature Customization**:
    - **Symbian**: Apps for UI changes consume memory, not default; custom firmware risky.
    - **Android**: Replace default apps (e.g., file browser) without risks or extra memory.
- **Processor Control**:
    - **Symbian**: No visibility/control over processor speed.
    - **Android**: Apps monitor/control speed for battery or performance.
- **Modifications**:
    - **Symbian**: Limited user modifications.
    - **Android**: Encourages extensive customization.

## 5. Conclusion


- **Android**: Advanced, user-focused, supports extensive customization and updates.
- **Symbian**: Needs feature updates to compete; strong in traditional phone functions.
- **Trend**: Android’s flexibility and open-source model give it an edge in modern mobile markets.
