Sure! Here's an enhanced version of the README with added insights about Kubernetes on Docker Desktop, clarification about its single-node setup, and some helpful online resources:

---

# Kubernetes Demo Resources

This repository contains sample Kubernetes manifests intended for **learning and demonstration purposes**.

> ✅ These resources are specifically crafted for use with **Docker Desktop's built-in Kubernetes engine**.

---

## ⚙️ Kubernetes on Docker Desktop

Docker Desktop includes a lightweight **single-node Kubernetes cluster**, making it ideal for local development and experimentation.

### Key Points:
- 🧪 **Great for learning**: Perfect for testing Kubernetes concepts without needing cloud infrastructure.
- 🖥️ **Single-node setup**: Both the control plane and workloads run on the same node.
- 💽 Uses a default StorageClass like `hostpath`, which stores volumes directly on the local filesystem.
- 🧼 Not suitable for production workloads or HA (High Availability) testing due to lack of multi-node support.

To enable Kubernetes in Docker Desktop:
1. Go to **Settings > Kubernetes**.
2. Check **Enable Kubernetes**.
3. Apply & Restart.

---

## 📦 StorageClass Configuration

The included manifests use the default StorageClass, typically `hostpath`, which is appropriate for Docker Desktop.  
If you’re working with a different environment (e.g., Minikube, GKE, EKS), the default StorageClass may vary.

To check your current StorageClasses:

```bash
kubectl get sc
```

Update the StorageClass references in the manifests if needed.

---

## 🌐 Helpful Resources

Here are some useful links to better understand and work with Kubernetes on Docker Desktop:

- 📘 [Kubernetes on Docker Desktop (Official Docs)](https://docs.docker.com/desktop/kubernetes/)
- 🛠️ [Kubernetes Basics - Interactive Tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🔧 [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- 📦 [Kubernetes StorageClass Concepts](https://kubernetes.io/docs/concepts/storage/storage-classes/)
