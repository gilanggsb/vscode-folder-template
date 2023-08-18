.PHONY: help clean get upgrade clean_get lint format build_runner clean_ios clean_android clean_all gen watch build submit_ios submit_android_bundle submit_android_apk

# help target: prints available targets
help:
	@echo "Available targets:"
	@echo ""
	@echo "Clean:"
	@echo "clean_ios                     Clean iOS folder"
	@echo "clean_android                 Clean Android folder"
	@echo "clean_all                     Clean iOS and Android folders"
	@echo ""
	@echo "Get:"
	@echo "get                           Get flutter pub"
	@echo "upgrade                       Upgrade dependencies"
	@echo "clean_get                     Clean and get flutter pub"
	@echo ""
	@echo "Code generator:"
	@echo "gen                           Generate assets"
	@echo "build_runner                  Generate files with build_runner"
	@echo "watch                         Watch the project"
	@echo "build                         Build the project"
	@echo ""
	@echo "Code formatting and analysis:"
	@echo "format                        Format the code"
	@echo "lint                          Verify code"
	@echo ""
	@echo "Submit:"
	@echo "submit_ios                    Open iOS project in Xcode"
	@echo "submit_android_bundle         Build Android bundle"
	@echo "submit_android_apk            Build Android APK"
	@echo ""
	@echo "Git:"
	@echo "fetch-main                    Fetch updates from main branch"
	@echo ""
	@echo "Fastlane:"
	@echo "fastlane_match_all            Make all certificates and provisioning profiles"
	@echo "fastlane_nuke_all             Remove both development and distribution match certificates and profiles"
	@echo "fastlane_get_all              Download all certificates and provisioning profiles from the match repo"
	@echo "fastlane_change_password      Change the password for the match repo"

IOS_PATH = ios/
ANDROID_PATH = android/
FLUTTER := flutter
FLUTTER_COMMAND := pub get

# The sandbox is not in sync with the Podfile.
# Run 'pod install' or update your CocoaPods installation
# if you see this message.
sync_ios:
	@echo "Syncing iOS CocoaPods..."
	@cd $(IOS_PATH) && rm -rf Pods Podfile.lock
	@cd $(IOS_PATH) && pod install
	@echo "CocoaPods synced."

clean_ios:
	@echo "Cleaning iOS folder..."
	@cd $(IOS_PATH) && rm -rf Podfile Podfile.lock Pods .symlinks .flutter-plugins .flutter-plugins-dependencies
	@echo "iOS folder cleaned."
	@echo "Remember to run flutter pub get"

clean_android:
	@echo "Cleaning Android folder..."
	@cd $(ANDROID_PATH) && rm -rf .gradle/ build/ app/build/
	@echo "Android folder cleaned."
	@echo "Remember to run flutter pub get"

clean_all: clean_ios clean_android

clean_get:
	@echo "⚡ Cleaning and getting flutter pub..."
	flutter clean
	flutter pub get
	@echo "⚡ Flutter pub clean and get complete!"

get:
	@echo "⚡ Getting flutter pub..."
	@flutter pub get
	@echo "⚡ Flutter pub get complete!"

build_runner:
	@echo "⚡ Running build_runner..."
	@flutter pub run build_runner build --delete-conflicting-outputs
	@echo "⚡ Run build_runner and generate files successfully!"

watch:
	@echo "⚡ Watching the project..."
	@flutter pub run build_runner watch --delete-conflicting-outputs
	@echo "⚡ Run build_runner watch successfully!"

gen:
	@echo "⚡ Generating the assets..."
	@flutter pub get
	@flutter pub run build_runner build

format:
	@echo "⚡ Formatting the code"
	@dart fix --apply

lint:
	@echo "⚡ Verifying code..."
	@dart analyze . || (echo "Error in project"; exit 1)

upgrade: clean
	@echo "⚡ Upgrading dependencies..."
	@flutter pub upgrade

remove:
	@echo "⚡ Removing dependencies..."
	@dart pub remove $(package)

xcode:
	@open ios/Runner.xcworkspace

submit_ios:
	flutter clean
	flutter pub get
	open ios/Runner.xcworkspace

submit_android_bundle:
	flutter clean
	flutter pub get
	flutter build appbundle

submit_android_apk:
	flutter clean
	flutter pub get
	#Android apk
	flutter build apk

#----------Git----------

fetch-main:
	git fetch origin main

reset_10min_ago:
	git reset --mixed master@{"10 minutes ago"}


#git_push_at_main:
#	git add .
#	git commit -m "$t" -m "$b"
#	git push -u origin main
#
#make git t="<commit message title>" b="<commit message body>"

#----------Fastlane----------

cd_ios:
	@cd $(IOS_PATH)
fastlane_match_all: cd_ios
	fastlane match

fastlane_nuke_all: cd_ios
	fastlane match nuke

fastlane_get_all: cd_ios
	fastlane match --readonly

fastlane_change_password: cd_ios
	fastlane match change_password


#----------emulator----------
.PHONY: android-screenshot ios-screenshot

android-screenshot:
	adb shell screencap /sdcard/screenshot.png
	adb pull /sdcard/screenshot.png ./screenshot_android.png
	adb shell rm /sdcard/screenshot.png

ios-screenshot:
	xcrun simctl io booted screenshot screenshot_ios.png