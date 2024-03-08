---
sidebar_position: 2
title: Get started
---

To get started with **Kotli**, ensure that the next Maven repository is added to your project:

```kotlin
dependencyResolutionManagement {
    repositories {
        maven { url "https://us-maven.pkg.dev/kotlitecture/kotli-maven" }
    }
}
```

:::info
Later, all libraries can be migrated to the Maven Central repository, making this step obsolete.
:::

Then add **Kotli** to the module where you’d like to use it.

```kotlin
dependencies {
    // engine (required)
    implementation("com.kotlitecture.kotli:kotli-engine:0.1.4")
    
    // android application template (optional)
    implementation("com.kotlitecture.kotli:template-android-compose:0.0.18")
    
    // backend spring boot template (optional)
    implementation("com.kotlitecture.kotli:template-backend-spring-boot:0.0.22")
}
```

Once done, verify that dependencies are available in the classpath and can be used to generate templates.

```kotlin
    // Init registry
    val androidProcessor = AndroidComposeTemplateProcessor() // android application template processor
    val backendProcessor = SpringBootTemplateProcessor() // backend spring boot template processor
    val templateRegistry = DefaultTemplateRegistry(androidProcessor, backendProcessor)
    
    // Define generator
    val templateGenerator = PathOutputGenerator(
        output = File("my-templates").toPath().toAbsolutePath(),    
        registry = templateRegistry,
    )
    
    // Generate android application template
    templateGenerator.generate(
        Layer(
            processorId = androidProcessor.getId(),
            namespace = "my.app.android",
            name = "my-android-app",
            features = listOf()
        )
    )
    
    // Generate backend spring boot template
    templateGenerator.generate(
        Layer(
            processorId = backendProcessor.getId(),
            namespace = "my.app.backend",
            name = "my-backend-app",
            features = listOf()
        )
    )
    
    // Check that the templates are generated under the root folder named `my-templates`
```