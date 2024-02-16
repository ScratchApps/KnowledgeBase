---
title: Häufige Installationsfehler
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

In diesem Artikel finden Sie einige der häufigsten Fehler, die bei der Installation von AdGuard für Windows auftreten können, sowie mögliche Lösungsansätze.

### Fehler 5: Zugriff verweigert {#error-5}

This error occurs when there's something wrong with permissions. There may be several different reasons why AdGuard installer doesn't have the permissions it requires to properly finish the installation process. Sie können die folgenden Schritte versuchen:

- Deaktivieren Sie vorübergehend Ihre Antivirenprogramme. Einige von ihnen können die Installation beeinträchtigen, je nachdem, wie stark sie eingestellt sind.

- Wählen Sie einen anderen Installationsordner. Es ist möglich, dass der aktuelle Installationsordner Zugriffsbeschränkungen hat. Stellen Sie außerdem sicher, dass Sie kein externes oder virtuelles Laufwerk usw. auswählen.

- Starten Sie Ihren Computer neu. Manchmal sind die Berechtigungsprobleme vorübergehend und können durch einen Neustart des PCs behoben werden.

### Fehler 112: Datenträger ist voll, Fehler 1632: Temporärer Ordner voll oder unzugänglich {#error-112}

Es handelt sich um zwei verschiedene Fehler mit sehr ähnlichen Lösungen. As their names suggest, AdGuard installer didn't find enough disk space to complete the installation. Es gibt mehrere Möglichkeiten, das Problem zu beheben:

- Deinstallieren Sie einige Programme oder löschen Sie unnötige Dateien von dem Laufwerk, auf dem Sie AdGuard installieren möchten.

- Laden Sie [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), eine kostenlose Software von Malwarebytes, herunter, installieren Sie sie und führen Sie sie aus. It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstall programs and such. Das wird helfen, etwas Speicherplatz freizugeben.

- Starten Sie Ihren Computer neu. Manchmal können temporäre Dateien eine beträchtliche Menge an Speicherplatz beanspruchen, und ein Neustart Ihres PCs ist die zuverlässigste Methode, sie loszuwerden.

### Fehler 1601: Auf Windows Installer kann nicht zugegriffen werden {#error-1601}

You could say this is a particular sub-case of Error 1603. Die möglichen Lösungen sind ähnlich:

- Start and re-register Microsoft Installer service. Das erfordert etwas Arbeit.

    1) Press *Win + R* and enter **services.msc**. 2) Suchen Sie in der Liste und doppelklicken Sie auf *Windows Installer*. 3) Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*. 4) Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*. 5) Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Starten Sie den PC neu und beginnen Sie die Installation von vorne. Manchmal reicht dies aus, um das Problem zu beheben.

### Error 1602: Canceled by user {#error-1602}

Wenn Sie diesen Fehlercode erhalten haben, haben Sie den Installationsprozess wahrscheinlich auf die eine oder andere Weise manuell unterbrochen. What you can do is:

- Schließen Sie nicht das Fenster des Installationsprogramms. Wenn die Installation abgeschlossen ist, wird es automatisch geschlossen.

- Wenn während der Installation ein Dialogfenster angezeigt wird, klicken Sie auf „Ja”, um dem Installationsprogramm die erforderlichen Berechtigungen zu erteilen. Wenn Sie auf „Nein“ klicken, wird die Installation abgebrochen.

- Starten Sie keine anderen Prozesse, während der Installationsvorgang ausgeführt wird.

### Fehler 1603: Schwerwiegender Fehler bei der Installation {#error-1603}

Der Fehler klingt erschreckender als er tatsächlich ist. In reality, this is a rather generic error that can have many different causes, and some of them are easily fixed. Probieren Sie die folgenden Lösungen aus:

- Drücken Sie die *Win*-Taste, suchen Sie nach *Eingabeaufforderung* und führen Sie sie aus. Geben Sie dort `sfc /scannow` ein und drücken Sie *Eingabetaste* ⏎.

- Wählen Sie einen anderen Installationsordner. Es ist möglich, dass der aktuelle Installationsordner Zugriffsbeschränkungen hat. Stellen Sie außerdem sicher, dass Sie kein externes oder virtuelles Laufwerk usw. auswählen.

- Deinstallieren Sie AdGuard mit unserem speziellen [Deinstallationstool](../../installation#advanced) und wiederholen Sie dann die Installation.

- Start and re-register Microsoft Installer service. Das erfordert etwas Arbeit.

    1) Press *Win + R* and enter ***services.msc***. 2) Suchen Sie in der Liste und doppelklicken Sie auf *Windows Installer*. 3) Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*. 4) Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*. 5) Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1) Open *File Explorer*, right-click the drive containing the installation location and select *Properties*. 2) Go to *Security* tab and click *Edit*. 3) Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*. 4) Click *OK* to go back to *Properties* dialog. Then click *Advanced*. 5) Click *Change Permissions*. 6) On *Permissions* tab, double-click *Administrators*. 7) Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*. 8) Do the same operation above (from item 7) for *SYSTEM*. 9) Click *OK* all the way out. Try installing AdGuard again.

### Error 1618: Another installation is already in progress {#error-1618}

This error occurs when there are several instances of AdGuard installer launched at the same time. What to do if you get this error:

- Reboot your PC and start the installer again. When you restart the computer, all ongoing processes will stop, including all copies of the installer.

- Don't make multiple clicks on the installer even if doesn't start right away. Sometimes it may take a few seconds to display the installer UI.

### Error 1638: Another version of this product is already installed {#error-1638}

It's very likely that you've already installed AdGuard before.

- Check if AdGuard is already installed on your computer. You can do it by pressing the *Win* key and typing in ***AdGuard***.

- Maybe there's some leftover files from a previous AdGuard installation. Deinstallieren Sie AdGuard mit unserem speziellen [Deinstallationstool](../../installation#advanced) und wiederholen Sie dann die Installation.

### Other errors {#other}

If you've encountered an error that's not listed above, it is possible that we can solve it by ourselves. But in order to do that, we need log files from you. Please perform the following steps:

- Find and archive **AdGuard installation logs** as it is described in [this article](../installation-logs).

- Find and save to disk **Event Viewer** logs. [This article](../system-logs) explains how to do that.

- Please email all these files from two previous steps to the support team at **support@adguard.com** and describe the problem in the message body. Our tech support agents will reply to you as soon as possible.
