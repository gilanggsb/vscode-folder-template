# NPM COMMAND

# run android development debug
andro_dev:
	npm run android:dev

# run android production debug
andro:
	npm run android

# Build apk android production release
apk:
	npm run build:android:release
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	@echo "Build production release apk successfull"

# Build apk android development release
apk_dev:
	npm run build:android:dev
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	@echo "Build development release apk successfull"

# Build apk android production debug
apk_debug:
	npm run build:android:production:debug
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	@echo "Build production debug apk successfull"

# Build apk android development release
apk_dev_debug:
	npm run build:android:dev:debug
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	@echo "Build development debug apk successfull"

# Build aab android production release
aab:
	npm run bundle:android:release
	@echo "Build production release aab successfull"

# Build aab android development release
aab_dev:
	npm run bundle:android:dev
	@echo "Build production release aab successfull"

# install
install:
	npm install --legacy-peer-deps

# start
start:
	npm start

# reset
reset:
	npm run reset


# GENERAL COMMAND
menu:
	@echo "###################################"
	@echo "List Menu : "
	@echo "1. npm install"
	@echo "2. npm start"
	@echo "3. npm reset"
	@echo "4. run android production"
	@echo "5. run android development"
	@echo "6. build apk production release"
	@echo "7. build apk development release"
	@echo "8. build apk production debug"
	@echo "9. build apk development debug"
	@echo "10. build aab production"
	@echo "11. build aab development"
	@echo "###################################"
	@read -p "Enter a value: " USER_INPUT && \
    if [ "$$USER_INPUT" -eq 1 ]; then \
        ${MAKE} install; \
    fi; \
	if [ "$$USER_INPUT" -eq 2 ]; then \
        ${MAKE} start; \
    fi; \
	if [ "$$USER_INPUT" -eq 4 ]; then \
        ${MAKE} andro; \
    fi; \
	if [ "$$USER_INPUT" -eq 3 ]; then \
        ${MAKE} reset; \
    fi; \
	if [ "$$USER_INPUT" -eq 5 ]; then \
        ${MAKE} andro_dev; \
    fi; \
	if [ "$$USER_INPUT" -eq 6 ]; then \
        ${MAKE} apk; \
    fi; \
	if [ "$$USER_INPUT" -eq 7 ]; then \
        ${MAKE} apk_dev; \
    fi; \
	if [ "$$USER_INPUT" -eq 8 ]; then \
        ${MAKE} apk_debug; \
    fi; \
	if [ "$$USER_INPUT" -eq 9 ]; then \
        ${MAKE} apk_dev_debug; \
    fi; \
	if [ "$$USER_INPUT" -eq 10 ]; then \
        ${MAKE} aab; \
    fi; \
	if [ "$$USER_INPUT" -eq 11 ]; then \
        ${MAKE} aab_dev; \
    fi; \

test: 
	@echo "HALOOOO LAGII"
test2: 
	@echo "HALOOOO 2"
