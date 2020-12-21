from django.urls import path
from rest_framework.routers import DefaultRouter
from transport.views import *

from transport import views

urlpatterns = [
    path('city/<str:city>/', views.CityView.as_view())
]

router = DefaultRouter()
router.register('cargos', CargoViewSet, basename='cargo')
router.register('orders', OrderViewSet, basename='order')
router.register('payments', PaymentViewSet, basename='payment')
router.register('branches', BranchViewSet, basename='branch')
router.register('car_parks', CarParkViewSet, basename='car_park')
router.register('transports', TransportViewSet, basename='transport')
router.register('drivers', DriverViewSet, basename='driver')
router.register('shippings', ShippingViewSet, basename='shipping')
router.register('clients', ClientViewSet, basename='client')
urlpatterns += router.urls


